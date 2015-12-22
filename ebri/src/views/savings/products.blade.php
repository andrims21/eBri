@extends('ebri::layouts.backend')

@section('header_assets')

<link href="{{ URL::asset('/packages/andriynto/ebri/js/plugins/iCheck/skins/square/green.css') }}" rel="stylesheet">
<!-- jQuery File Upload -->
<link href="{{ URL::asset('/packages/andriynto/ebri/js/plugins/markitup/skins/simple/style.css') }}" rel="stylesheet">
<link href="{{ URL::asset('/packages/andriynto/ebri/js/plugins/markitup/sets/default/style.css') }}" rel="stylesheet">
<link href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/font-awesome.min.css') }}" rel="stylesheet">


<!-- Select2 -->
<link href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/select2.css') }}" rel="stylesheet">
<link href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/multiple-select.css') }}" rel="stylesheet">
<link href="{{ URL::asset('/packages/andriynto/ebri/css/vendor/chosen.css') }}" rel="stylesheet">
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

    <div id="savings-wrapper" class="ebri-container"></div>

    <script id="savings-template" type="text/html">
        <div class="page-content row">
            <div class="page-header">
                <div class="page-title">
                    <h3><i class="fa fa-desktop"></i> Retail Savings <small> (Simpanan Ritel) </small></h3>
                </div>
                <ul class="breadcrumb">
                    <li><a href="javascript:void(0);">Home</a></li>
                    <li><a href="javascript:void(0);">Savings</a></li>
                    <li class="javascript:void(0);">Retail Savings</li>
                    <li class="active">Per Products</li>
                </ul>
            </div>
        </div>
    </script>

    <div class="tab-content m-t hide">
        <div class="tab-pane active use-padding" id="info">   
            <div class="sbox  "> 
                <div class="sbox-title">
                    <h5> <i class="fa fa-table"></i> Simpanan {{ ucfirst($code) }} Per Products <small> <strong>Data Sumber</strong> : DWH – <strong>Kode</strong> : LaporanKanwilSimpanan%2fDLY_DD_SIMPANAN_PER_PRODUK (1124)</small></h5>
                </div>
                <div class="sbox-tools">
                    <a href="" class="btn btn-xs btn-white tips" title="" data-original-title=" Configuration"><i class="fa fa-cog"></i></a>
                </div>

                <div class="sbox-content"> 
                    <div class="block-content">
                        <ul class="nav nav-tabs">
                            <li class="active"> <a href="#product-modal" data-toggle="modal" title="Per Products"> Products  </a></li>
                            <li><a href="#branch-modal" data-toggle="modal" title="Per Kantor Cabang"> Branch  </a></li>
                            <li><a href="#branchoffice-modal" data-toggle="modal" title="Per Unit Kerja"> Branch Office </a><Branch Office  </a></li>
                        </ul>
                    </div>
                    <div class="row">
                        <div class="col-md-12 "> 
                            <div class="toolbar-line ">
                                <div class="pull-right">
                                    <a class="btn btn-primary" href="#excel-modal" data-toggle="modal"><i class="fa fa-file-excel-o"></i> Excel</a>
                                </div>
                                <div class="pull-right">
                                    <a class="btn btn-primary" href="#pdf-modal" data-toggle="modal"><i class="fa fa-file-pdf-o"></i> PDF</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row hidden-xs hidden-sm">
                        <div class="toolbar-line ">
                            <div class="pull-right">
                                <h5><strong>(Juta)</strong></h5>
                            </div>
                        </div>
                    </div>
                    <?php if(isset($savings) and count($savings) > 0) { ?>
                    <div class="row m-b hidden-xs hidden-sm">
                        <div class="col-md-3 table-responsive"> 
                            <table class="table table-striped ">
                                
                                <thead>
                                    <tr>
                                        <?php 
                                            $december  = $date_header[0];
                                            $last_date = end($date_header); 
                                            $end_date  = end($date_report);
                                        ?>
                                        <td class="m-t status-report-maximize">{{ $december }} -- {{ $last_date }} <small><br>(<a href="javascript::void(0);">Current month</a>)</small></td>
                                        <td class="m-t hide status-report-minimize">{{ $december }} -- {{ $last_date }} <br>(<a href="javascript::void(0);">Current month</a>)</td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;</td>
                                    </tr>

                                    @foreach($savings as $idt => $data)
                                        <?php $current_data = current($data); ?>
                                        <tr>
                                            <td>
                                                <a>{{ $current_data->product }}</a>
                                            </td>
                                        </tr>
                                    @endforeach
                                </thead>
                            </table>
                        </div>

                        <div class="col-md-9 table-responsive" style="overflow:auto">
                            <table class="table table-striped ">
                                <thead>
                                    <tr>
                                        @foreach($date_header as $date)
                                            <th colspan="2"><center>{{ $date}}</center></th>
                                        @endforeach
                                        @for ($j = 0; $j < count($date_header) - 1; $j++)
                                            <?php $end = count($date_header) - 1; ?>
                                                <th colspan="2"><center>∆ {{ $date_header[$end] }} -- {{ $date_header[$j] }} </center></th>
                                        @endfor
                                        <th colspan="2"><center>Target 2015</center></th>
                                        <th colspan="2"><center>Shortage</center></th>
                                        <th colspan="2"><center>Achievments</center></th>
                                    </tr>
                                    <tr>
                                        @foreach($title_table as $title)
                                            <th><center>{{ $title }}</center></th>
                                        @endforeach

                                        @for($i = 1; $i < count($title_table) - 1; $i++)
                                             @if(count($title_table) % 2 == 0)
                                                <th><center>{{ $title_table[$i+1] }}</center></th>
                                             @else
                                                <th><center>{{ $title_table[$i] }}</center></th>
                                             @endif
                                        @endfor
                                        @for($i = 1; $i < 4; $i++)
                                            <th><center>Rekening</center></th>
                                            <th><center>Instanding</center></th>
                                        @endfor
                                    </tr>
                                </thead>
                                @foreach($savings as $idt => $data)
                                <tr>
                                    @foreach($date_report as $index => $dt)
                                        <td align="right" data-toggle="tooltip" >{{ number_format($data[$dt]->rekening, 0, ',', '.') }}</td>
                                        <td align="right" data-toggle="tooltip">{{ number_format($data[$dt]->instanding, 0, ',', '.') }}</td>
                                    @endforeach

                                    @foreach($date_report as $index => $dt)
                                        @if ($index < count($date_report) - 1)
                                            <?php
                                                $delta_rek = number_format($data[$end_date]->rekening - $data[$dt]->rekening, 0, ",", ".");
                                                $delta_instanding = number_format($data[$end_date]->instanding - $data[$dt]->instanding, 0, ",", ".");
                                            ?>
                                            @if($delta_rek < 0)
                                               <?php $class_delta = "danger"; ?>
                                            @elseif($delta_rek == 0)
                                               <?php $class_delta = "warning"; ?>
                                            @elseif($delta_rek > 0)
                                               <?php $class_delta = "success"; ?>
                                            @endif
                                            <td align="right" class="{{ $class_delta }}">{{ $delta_rek }}</td>
                                            @if($delta_instanding < 0)
                                               <?php $class_instanding = "danger"; ?>
                                            @elseif($delta_instanding == 0)
                                               <?php $class_instanding = "warning"; ?>
                                            @elseif($delta_instanding > 0)
                                               <?php $class_instanding = "success"; ?>
                                            @endif
                                            <td align="right" class="{{ $class_instanding }}">{{ $delta_instanding }}</td>
                                        @endif
                                    @endforeach

                                    @foreach($target as $rka)
                                        @if($data[$dt]->productId == $rka->productId )
                                            <td align="right">{{ number_format($rka->rekening, 0, ',', '.') }}</td>
                                            <td align="right">{{ number_format($rka->instanding, 0, ',', '.') }}</td>

                                            <?php
                                                $delta_rka_rek = number_format($data[$end_date]->rekening - $rka->rekening , 0, ",", ".");
                                                $delta_rka_instanding = number_format($data[$end_date]->instanding - $rka->instanding,  0, ",", ".");

                                                $pencapaian_rekening = round(($data[$end_date]->rekening / $rka->rekening) * 100, 2) ;
                                                $pencapaian_instanding = round(($data[$end_date]->instanding / $rka->instanding) * 100, 2);
                                            ?>
                                            @if($delta_rka_rek < 0)
                                               <?php $class_delta = "danger"; ?>
                                            @elseif($delta_rka_rek == 0)
                                               <?php $class_delta = "warning"; ?>
                                            @elseif($delta_rka_rek > 0)
                                               <?php $class_delta = "success"; ?>
                                            @endif
                                            @if($delta_rka_instanding < 0)
                                               <?php $class_instanding = "danger"; ?>
                                            @elseif($delta_rka_instanding == 0)
                                               <?php $class_instanding = "warning"; ?>
                                            @elseif($delta_rka_instanding > 0)
                                               <?php $class_instanding = "success"; ?>
                                            @endif
                                            <td align="right"  class="{{ $class_delta }}">{{ $delta_rka_rek }}</td>
                                            <td align="right"  class="{{ $class_instanding }}">{{ $delta_rka_instanding }}</td>

                                            @if($pencapaian_rekening < 100)
                                               <?php $class_delta = "danger"; ?>
                                            @elseif($pencapaian_rekening >= 100)
                                               <?php $class_delta = "success"; ?>
                                            @endif
                                            @if($pencapaian_instanding < 100)
                                               <?php $class_instanding = "danger"; ?>
                                            @elseif($pencapaian_instanding >= 100)
                                               <?php $class_instanding = "success"; ?>
                                            @endif
                                            <td align="right"  class="{{ $class_delta }}">{{ $pencapaian_rekening }} %</td>
                                            <td align="right"  class="{{ $class_instanding }}">{{ $pencapaian_instanding }} %</td>
                                        @endif
                                    @endforeach
                                    </tr>
                                @endforeach
                            </table>
                        </div>
                    </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>

    @include('ebri::savings.modals_menu')
    
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

            require(['savings'], function(App){
                App.initialize();
            });
        });
    });
</script>
@stop