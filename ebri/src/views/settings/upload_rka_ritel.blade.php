@extends('ebri::layouts.backend')

@section('header_assets')

<link href="{{ URL::asset('/packages/andriynto/ebri/js/plugins/iCheck/skins/square/green.css') }}" rel="stylesheet">
<!-- jQuery File Upload -->
<link href="{{ URL::asset('/packages/andriynto/ebri/js/plugins/markitup/skins/simple/style.css') }}" rel="stylesheet">
<link href="{{ URL::asset('/packages/andriynto/ebri/js/plugins/markitup/sets/default/style.css') }}" rel="stylesheet">
<link href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/font-awesome.min.css') }}" rel="stylesheet">


<!-- Select2 -->
<link href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/select2.css') }}" rel="stylesheet">
<!-- jQuery UI -->
<link href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/jquery-ui-1.10.4.custom.min.css') }}" rel="stylesheet">
<!-- jQuery File Upload -->
<link href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/jquery.fileupload.css') }}" rel="stylesheet">
<link href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/jquery.fileupload-ui.css') }}" rel="stylesheet">
<noscript><link rel="stylesheet" href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/jquery.fileupload-noscript.css') }}"></noscript>
<noscript><link rel="stylesheet" href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/jquery.fileupload-ui-noscript.css') }}"></noscript>

<!-- Swipebox -->
<link href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/swipebox.min.css') }}" rel="stylesheet">
@stop



@section('content')
<div id="wrapper">
@include('ebri::layouts.menu')
    <div class="gray-bg " id="page-wrapper">
        @include('ebri::layouts.header_system')

    <div id="setting-wrapper" class="ebri-container"></div>

    <div class="tab-content m-t hide">
        <div class="tab-pane active use-padding" id="info">   
            <div class="sbox  "> 
                <div class="sbox-title">
                    <h5> <i class="fa fa-table"></i> RKA <small> <strong>Data Sumber</strong> : Kantor Wilayah – <strong>Kode</strong> : RKA Simpanan Ritel</small></h5>
                </div>
                <div class="sbox-tools">
                    <a href="" class="btn btn-xs btn-white tips" title="" data-original-title=" Configuration"><i class="fa fa-cog"></i></a>
                </div>

                <div class="sbox-content"> 
                    <!-- content -->
                    <div class="row m-b">
                        <div class="col-md-12 "> 
                            <div class="toolbar-line ">
                                @if (@option('upload_rka_ritel') == 'true')
                                <div class="pull-right">
                                    <a class="btn btn-primary" href="#upload-modal" data-toggle="modal"><i class="glyphicon glyphicon-upload"></i> Upload</a>
                                </div>
                                @endif
                                <div class="pull-right">
                                    <a class="btn btn-primary" href="#download-modal" data-toggle="modal"><i class="glyphicon glyphicon-download"></i> Download</a>
                                </div>
                                <div class="pull-right">
                                    <a class="btn btn-primary" href="#download-modal" data-toggle="modal"><i class="glyphicon glyphicon-import"></i> Import</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row m-b hidden-xs hidden-sm">
                        @if(count($target) > 0)
                        <div class="col-md-5 table-responsive"> 
                            <table class="table table-striped ">
                                <thead>
                                    <tr>
                                        <th colspan="2"><small>Rencana Kinerja Anggaran Tahun 2015 (Kategori Simpanan Ritel)</small></th>
                                    </tr>
                                    <tr>
                                        <th>KANTOR CABANG</th>
                                        <th>UNIT KERJA</th>
                                    </tr> 
                                    @foreach($branches as $branch)
                                        @foreach($target as $index => $row)
                                            @foreach($offices as $office)
                                                <?php 
                                                    if(isset($target[$branch['branch']]) &&  $branch['branch'] == $index  && $branch['branch'] == $office->branch)
                                                    {
                                                ?>
                                                <tr>
                                                    <td>
                                                        <a>{{ $branch['description'] }}</a>
                                                    </td>

                                                    <td>
                                                        <a>{{ $office->description }}</a>
                                                    </td>
                                                </tr>
                                                <?php
                                                    }
                                                ?>
                                            @endforeach
                                        @endforeach
                                    @endforeach
                                </thead>
                            </table>
                        </div>

                        <div class="col-md-7 table-responsive" style="overflow:auto">
                            <table class="table table-striped ">
                                <thead>
                                    <tr>
                                    @foreach($products as $product)
                                        <th colspan="2"><center>{{ $product->product }}</center></th>
                                    @endforeach
                                    </tr>
                                    <tr>
                                        @foreach($title_table as $title)
                                            <th><center><small>{{ $title }}</center></small></th>
                                        @endforeach
                                    </tr>
                                </thead>
                                @foreach($target as $index => $row)
                                    @foreach($branches as $branch)
                                        <?php
                                            if(isset($target[$branch['branch']]) &&  $branch['branch'] == $index )
                                            {
                                        ?>
                                            @foreach($offices as $office)
                                                <?php
                                                    if(isset($target[$branch['branch']][$office->branch_office]) )
                                                    {
                                                        if(isset($target[$branch['branch']][$office->branch_office]) && $branch['branch'] == $office->branch )
                                                        {
                                                ?>
                                                        <tr>
                                                        @foreach($products as $product)
                                                            
                                                                <td align="right">{{ number_format($target[$branch['branch']][$office->branch_office][$product->product]->rekening, 0, ",", ".") }}</td>
                                                                <td align="right">{{ number_format($target[$branch['branch']][$office->branch_office][$product->product]->instanding, 0, ",", ".")  }}</td>
                                                        @endforeach
                                                        </tr>
                                                <?php   
                                                        }
                                                    }
                                                ?>
                                            @endforeach
                                        <?php        
                                            }
                                        ?>
                                    @endforeach
                                @endforeach
                            </table>
                        </div>
                        @else
                        <div class="infobox infobox-danger fade in pull-left ">
                            <p> Data RKA tidak ditemukan silahkan upload data RKA. untuk meng-upload silahkan downlad master data berformat excel kemudian upload pada sistem. Jika mengalami kendala silahkan hubungi Administrator.</p>
                        </div>
                        @endif

                    </div>
                </div>
            </div>
        </div>
    </div>

    <script id="settings-upload-template" type="text/html">
       <div class="page-content row">
            <div class="page-header">
                <div class="page-title">
                    <h3><i class="fa fa-desktop"></i> Target RKA <small> Upload data RKA </small></h3>
                </div>
                <ul class="breadcrumb">
                    <li><a href="{{ Url::to('/dashboard') }}">Dashboard</a></li>
                    <li><a href="{{ Url::to('/settings') }}" >Settings</a></li>
                    <li><a href="{{ Url::to('/upload') }}">Upload</a></li>
                    <li class="active">Target Rka</li>
                </ul>
            </div>
        </div>
        <div class="page-content-wrapper"> 
            <div class="block-content">
            <ul class="parsley-error-list"></ul>
                <ul class="nav nav-tabs" style="margin:10px 0;">
                    <li><a href="{{ Url::to('upload/target_rka') }}"> Lihat RKA </a></li>
                    <li class="active"><a href="{{ Url::to('upload/settings/upload/rencana_kerja_anggaran_ritel') }}"> Keragaan Ritel </a></li>
                    <li><a href="{{ Url::to('settings/upload/rencana_kerja_anggaran_mikro') }}"> Keragaan Mikro </a></li>
                </ul>
            </div>
        </div>
    </script>

    <script id="upload-modal-template" type="text/html">
    <div id="upload-modal" class="modal ebri-modal fade" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <a class="close" data-dismiss="modal" aria-hidden="true">&times;</a>
                    <h4 class="modal-title">{{ @translate('Upload Files') }}</h4>
                </div>
                <div class="modal-body">
                    <div class="clearfix">
                        <div class="pull-left choose-files-intro">{{ @translate('Click "Choose Files" to start selecting files you want to upload.') }}</div>
                        <div class="pull-right"><label><input type="checkbox" id="upload-overwrite" value="true" /> {{ @translate('Overwrite?') }}</label></div>
                    </div>
                    <!-- The table listing the files available for upload/download -->
                    <table role="presentation" class="table table-striped"><tbody class="files"></tbody></table>
                </div>
                <div class="modal-footer clearfix">
                    
                    <div class="file-actions pull-right">
                        <form method="POST" action="" accept-charset="UTF-8" id="fileupload" class="mb0" enctype="multipart/form-data">
                            <span class="btn btn-primary fileinput-button"><i class="glyphicon glyphicon-plus glyphicon-white"></i> {{ @translate('Choose files') }}
                            <input type="file" name="files[]" multiple/></span>
                            <input type="hidden" name="access_token" value="">
                            <a class="btn btn-info a-close-file-modal" data-dismiss="modal" aria-hidden="true">{{ @translate('Close') }}</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </script>

    <script id="download-modal-template" type="text/html">
    <div id="download-modal" class="modal ebri-modal fade" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <a class="close" data-dismiss="modal" aria-hidden="true">×</a>
                        <h4 class="modal-title">Master_RKA_Ritel.xlsx</h4>
                </div>

                <div class="modal-body align-center">
                    <img src="http://ebri.dev/packages/andriynto/ebri/images/icons/xlsx.png" alt="" width="100">
                    <br><br>
                    <strong>application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</strong>
                    <p>Tue, Nov 24 2015 2:33 PM - 49.67 KB</p>
                </div>
                <div class="modal-footer">
                    <a href="http://ebri.dev/packages/andriynto/ebri/master/Master_RKA_Ritel.xlsx" class="btn btn-primary download-act"><i class="glyphicon glyphicon-download glyphicon-white"></i> Download</a>
                    <a class="btn btn-default" data-dismiss="modal" aria-hidden="true">Close</a>
                </div>
            </div>
        </div>
    </div>
    </script>

    <script id="template-upload" type="text/x-tmpl">
    {{ '{% for (var i=0, file; file=o.files[i]; i++) { %}
        <tr class="template-upload fade alert alert-info">
            <td style="width:100%;">
                <span class="name">{%=file.name%}</span>&nbsp;|&nbsp;<span class="size">{%=o.formatFileSize(file.size)%}</span>
                {% if (!o.files.message) { %}
                    <div class="progress progress-striped active">
                        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%">
                            <span class="sr-only">0%</span>
                        </div>
                    </div>
                {% } %}
                {% if (file.message) { %}
                    <div><span class="label label-important">Error</span> {%=file.description%}</div>
                {% } %}
            </td>
            <td class="actions">
                {% if (!i) { %}
                    <button class="btn cancel">
                        <i class="glyphicon glyphicon-remove"></i>
                    </button>
                {% } %}
            </td>
        </tr>
    {% } %}' }}
    </script>

    <!-- The template to display files available for download -->
    <script id="template-download" type="text/x-tmpl">
    {{ "{% for (var i=0, file; file=o.files[i]; i++) { %}
        <tr class=\"template-download fade alert alert-success\">
            <td style=\"width:100%;\">
                {% if (file.path) { %}
                <span class=\"name\">{%=file.path%}</span>&nbsp;|&nbsp;<span class=\"size\">{%=file.size%}</span>
                {% } %}
                {% if (file.message) { %}
                    <div><span class=\"label label-danger\">Error</span> {%=file.description%}</div>
                {% } %}
            </td>
            {% if (file.message) { %}
            <td class=\"actions\">
                <button class=\"btn cancel\">
                    <i class=\"glyphicon glyphicon-remove\"></i>
                </button>
            </td>
            {% } %}
        </tr>
    {% } %}" }}
    </script>

    <div id="content-loading-wrapper" class="ebri-container">
        <h1>
            <a href="{{ URL::to('/') }}">
                <img id="content-loading-gif" src="{{ URL::asset('/packages/andriynto/ebri/images/ajax-loader.gif') }}" alt="{{ @option('brand') }}" class="hide">
                <div id="content-loading-css" class="spinner hide">
                    <div class="double-bounce1"></div>
                    <div class="double-bounce2"></div>
                </div>
            </a>
        </h1>
    </div>
</div>
@stop


@section('footer_assets')
<script type="text/javascript">
    require([baseUrl + '/packages/andriynto/ebri/js/backend.js'], function() {
        require(['app'], function(App){
            App.initialize();

            require(['setting'], function(App){
                App.initialize();
            });
        });
    });
</script>
@stop