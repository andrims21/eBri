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
                    <li class="active">{{ $product_detail->product }} Per Branch Office</li>
                </ul>
            </div>
        </div>
    </script>

    @if(count($savings) > 0)
    <div class="tab-content m-t hide">
        <div class="tab-pane active use-padding" id="info">   
            <div class="sbox  "> 
                <div class="sbox-title">
                    <h5> <i class="fa fa-table"></i> Simpanan {{ ucfirst($code) }}  Produk (<u><a>{{ $product_detail->product }}</a></u>)  <a>Per Kantor Cabang</a> | <small> <strong>Data Sumber</strong> : DWH – <strong>Kode</strong> : LaporanKanwilSimpanan%2fDLY_DD_SIMPANAN_PER_PRODUK (1124)</small></h5>
                </div>
                <div class="sbox-tools">
                    <a href="" class="btn btn-xs btn-white tips" title="" data-original-title=" Configuration"><i class="fa fa-cog"></i></a>
                </div>

                <div class="sbox-content"> 
                    <div class="block-content">
                        <ul class="nav nav-tabs">
                            <li> <a href="#product-modal" data-toggle="modal" title="Per Products"> Products  </a></li>
                            <li><a href="#branch-modal" data-toggle="modal" title="Per Kantor Cabang"> Branch  </a></li>
                            <li class="active"><a href="#branchoffice-modal" data-toggle="modal" title="Per Unit Kerja"> Branch Office  </a></li>
                        </ul>
                    </div>
                    <div class="row">
                        <div class="col-md-6 "> 
                            <div class="toolbar-line ">
                                <div class="pull-left">
                                   
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 "> 
                            <div class="toolbar-line ">
                                <div class="pull-right">
                                    <a class="btn btn-primary" href="#branch-office-modals-export-excel" data-toggle="modal"><i class="fa fa-file-excel-o"></i> Excel</a>
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

                    <div class="row m-b hidden-xs hidden-sm">
                        <?php if($code == 'ritel') $cl = 'col-md-5'; else $cl = 'col-md-6'; ?>
                        <div class="{{ $cl }} table-responsive"> 
                            <table class="table table-striped ">
                                <thead>
                                   <tr>
                                        <?php 
                                            $december  = $date_header[0];
                                            $last_date = end($date_header); 
                                            $end_date  = end($date_report);
                                        ?>
                                        <th>No</th>
                                        <th>Branch</th>
                                        <th>Branch Office
                                        @if(count($date_report) > 1)
                                            <br>&nbsp;
                                        @endif
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    @foreach($savings as $saving)
                                        @foreach($branches as $branch)
                                            <?php
                                            if(isset($saving[$branch->id]))
                                            {
                                                $j = 0;
                                            ?>
                                               @foreach($branchOffices as $branchOffice)
                                               <?php
                                                        if(isset($saving[$branch->id][$branchOffice->id][$end_date] )  and $saving[$branch->id][$branchOffice->id][$end_date]->branch == $branch->id  )
                                                        {
                                                    ?>
                                                        <tr style="background:#f5f5f0">
                                                            <td>{{ $j+=1 }})</td>
                                                            <td>
                                                                {{ $branch->id }} -- {{ $branch->name }} 
                                                            </td>

                                                             <td>
                                                                {{ $branchOffice->id }} -- {{ $branchOffice->description }} 
                                                            </td>
                                                        </tr>
                                                    <?php
                                                        }
                                                    ?>
                                               @endforeach
                                               <tr>
                                                    <th  style="background:#ff6600;"></th>
                                                    <th colspan="2" style="background:#ff6600;"><a style="color:#fff;">Sub Total Kanca ({{ $branch->id }} -- {{ $branch->name }}) </a></th>
                                                </tr>
                                            <?php
                                            }
                                            ?>
                                        @endforeach
                                    @endforeach
                                    <tr>
                                         <th colspan="4" style="background:#cc3300;"><a style="color:#fff;">GRAND TOTAL</a></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                        <?php if($code == 'ritel') $cl = 'col-md-7'; else $cl = 'col-md-6'; ?>
                        <div class="{{ $cl }} table-responsive" style="overflow:auto">
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
                                 @foreach($savings as $saving)
                                        @foreach($branches as $branch)
                                            <?php
                                            if(isset($saving[$branch->id]))
                                            {
                                            ?>
                                               @foreach($branchOffices as $branchOffice)
                                               <?php
                                                        if(isset($saving[$branch->id][$branchOffice->id] ) )
                                                        {
                                                    ?>
                                                    <tr style="background:#f5f5f0">
                                                        @foreach($date_report as $index => $date)
                                                        <?php
                                                        if(isset($saving[$branch->id][$branchOffice->id][$date] )  and $saving[$branch->id][$branchOffice->id][$date]->branch == $branch->id  )
                                                        {
                                                        ?>
                                                            <td align="right" title="" data-toggle="tooltip" data-placement="top" data-original-title="{{ $saving[$branch->id][$branchOffice->id][$date]->description }} || {{ $date }} || Rekening" >{{ number_format($saving[$branch->id][$branchOffice->id][$date]->rekening, 0, ',', '.') }}</td>
                                                            <td align="right" title="" data-toggle="tooltip" data-placement="top" data-original-title="{{ $saving[$branch->id][$branchOffice->id][$date]->description }} || {{ $date }} || Instanding" >{{ number_format($saving[$branch->id][$branchOffice->id][$date]->instanding, 0, ',', '.') }}</td>
                                                        <?php
                                                        }
                                                        ?>
                                                        @endforeach

                                                        @foreach($date_report as $index => $date)
                                                            @if ($index < count($date_report) - 1)
                                                                <?php
                                                                    if( $date == $saving[$branch->id][$branchOffice->id][$date]->date_report)
                                                                    {
                                                                        $delta_rek = number_format($saving[$branch->id][$branchOffice->id][$end_date]->rekening - $saving[$branch->id][$branchOffice->id][$date]->rekening, 0, ",", ".");
                                                                        $delta_instanding = number_format($saving[$branch->id][$branchOffice->id][$end_date]->instanding - $saving[$branch->id][$branchOffice->id][$date]->instanding, 0, ",", ".");
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
                                                                <?php
                                                                    }
                                                                ?>
                                                            @endif
                                                        @endforeach
                                                        
                                                            <?php
                                                            if(isset($target_branch_offices[$branch->id][$branchOffice->id]) and $target_branch_offices[$branch->id][$branchOffice->id]->id == $branchOffice->id)
                                                            {
                                                                
                                                                    $delta_rka_rek = number_format($saving[$branch->id][$branchOffice->id][$end_date]->rekening - $target_branch_offices[$branch->id][$branchOffice->id]->rekening, 0, ",", ".");
                                                                    $delta_rka_instanding = number_format($saving[$branch->id][$branchOffice->id][$end_date]->instanding - $target_branch_offices[$branch->id][$branchOffice->id]->instanding, 0, ",", ".");
                                                                    
                                                                    if($target_branch_offices[$branch->id][$branchOffice->id]->rekening <> 0 and $target_branch_offices[$branch->id][$branchOffice->id]->instanding <> 0)
                                                                    {
                                                                     $pencapaian_rekening = round(($saving[$branch->id][$branchOffice->id][$end_date]->rekening / $target_branch_offices[$branch->id][$branchOffice->id]->rekening) * 100, 2) ;
                                                                     $pencapaian_instanding = round(($saving[$branch->id][$branchOffice->id][$end_date]->instanding / $target_branch_offices[$branch->id][$branchOffice->id]->instanding) * 100, 2);
                                                                     }else
                                                                     {
                                                                        $pencapaian_rekening = 0; $pencapaian_instanding = 0;
                                                                     }                                                    
                                                            ?>
                                                             <td align="right">{{ number_format($target_branch_offices[$branch->id][$branchOffice->id]->rekening, 0, ",", ".")  }}</td>
                                                             <td align="right">{{ number_format($target_branch_offices[$branch->id][$branchOffice->id]->instanding, 0, ",", ".") }}</td>

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

                                                             <td align="right" class="{{ $class_delta }}">{{ $delta_rka_rek }}</td>
                                                             <td align="right" class="{{ $class_instanding }}">{{ $delta_rka_instanding }}</td>

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

                                                             <td align="right" class="{{ $class_delta }}">{{ $pencapaian_rekening }}%</td>
                                                             <td align="right" class="{{ $class_instanding }}">{{ $pencapaian_instanding }}%</td>

                                                            <?php
                                                            }else
                                                            {
                                                            ?>
                                                            <td align="right">0</td>
                                                            <td align="right">0</td>

                                                            <td align="right">0</td>
                                                            <td align="right">0</td>

                                                            <td align="right">0 %</td>
                                                            <td align="right">0 %</td>
                                                            <?php
                                                            }
                                                            ?>
                                                        
                                                    </tr>
                                                    <?php
                                                        }
                                                    ?>
                                               @endforeach
                                               <!-- Sub Total -->
                                               <tr>
                                               @foreach($sub_total as $key_subtotal => $subTotal)
                                                    <?php
                                                    if($branch->id == $key_subtotal)
                                                    {
                                                    ?>
                                                    @foreach($date_report as $index => $date)
                                                        <th style="background:#ff6600; text-align:right;"><a style="color:#fff;">{{ number_format($subTotal[$date]->rekening, 0, ",", ".") }}</a></th>  
                                                        <th style="background:#ff6600; text-align:right;"><a style="color:#fff;">{{ number_format($subTotal[$date]->instanding, 0, ",", ".") }}</a></th>        
                                                    @endforeach
                                                    
                                                    <?php
                                                    }
                                                    ?>

                                                    @foreach($date_report as $index => $date)
                                                         @if ($index < count($date_report) - 1)
                                                            
                                                            <?php
                                                           if($branch->id == $key_subtotal)
                                                            {
                                                                $delta_rek = number_format($subTotal[$end_date]->rekening - $subTotal[$date]->rekening, 0, ",", ".");
                                                                $delta_instanding = number_format($subTotal[$end_date]->instanding - $subTotal[$date]->instanding, 0, ",", ".");
                                                            ?>
                                                                @if($delta_rek < 0)
                                                                    <?php $class_delta = "danger"; ?>
                                                                @elseif($delta_rek == 0)
                                                                    <?php $class_delta = "warning"; ?>
                                                                @elseif($delta_rek > 0)
                                                                    <?php $class_delta = "success"; ?>
                                                                 @endif
                                                                <th style="background:#ff6600; text-align:right;" class="{{ $class_delta }}"><a style="color:#fff;">{{ $delta_rek }}</th>
                                                                @if($delta_instanding < 0)
                                                                    <?php $class_instanding = "danger"; ?>
                                                                @elseif($delta_instanding == 0)
                                                                    <?php $class_instanding = "warning"; ?>
                                                                @elseif($delta_instanding > 0)
                                                                    <?php $class_instanding = "success"; ?>
                                                                @endif
                                                                <th style="background:#ff6600; text-align:right;" class="{{ $class_instanding }}"><a style="color:#fff;">{{ $delta_instanding }}</th>
                                                                <?php
                                                                    }
                                                                ?>
                                                        @endif        
                                                    @endforeach
                                                    <?php
                                                    if($branch->id == $key_subtotal)
                                                    {
                                                        if(isset($target_subtotal[$branch->id]) and $target_subtotal[$branch->id]->branch == $branch->id )
                                                        {
                                                            $sub_total_delta_rka_rek = number_format($subTotal[$end_date]->rekening - $target_subtotal[$branch->id]->rekening, 0, ",", ".");
                                                            $sub_total_delta_rka_instanding = number_format($subTotal[$end_date]->instanding - $target_subtotal[$branch->id]->instanding,  0, ",", ".");

                                                            if($target_subtotal[$branch->id]->rekening <> 0 and $target_subtotal[$branch->id]->instanding <> 0)
                                                            {
                                                                $sub_total_pencapaian_rekening = round(($subTotal[$end_date]->rekening / $target_subtotal[$branch->id]->rekening) * 100, 2) ;
                                                                $sub_total_pencapaian_instanding = round(($subTotal[$end_date]->instanding / $target_subtotal[$branch->id]->instanding) * 100, 2);
                                                            }else{
                                                                $sub_total_pencapaian_rekening = 0; $sub_total_pencapaian_instanding = 0;   
                                                            }
                                                    ?>
                                                            <th style="background:#ff6600; text-align:right;"><a style="color:#fff;">{{ number_format($target_subtotal[$branch->id]->rekening, 0, ",", ".")  }}</a></th>
                                                            <th style="background:#ff6600; text-align:right;"><a style="color:#fff;">{{ number_format($target_subtotal[$branch->id]->instanding, 0, ",", ".") }}</a></th>

                                                            <th style="background:#ff6600; text-align:right;"><a style="color:#fff;">{{ $sub_total_delta_rka_rek  }}</a></th>
                                                            <th style="background:#ff6600; text-align:right;"><a style="color:#fff;">{{ $sub_total_delta_rka_instanding }}</a></th>

                                                            <th style="background:#ff6600; text-align:right;"><a style="color:#fff;">{{ $sub_total_pencapaian_rekening  }}%</a></th>
                                                            <th style="background:#ff6600; text-align:right;"><a style="color:#fff;">{{ $sub_total_pencapaian_instanding }}%</a></th>
                                                    <?php
                                                        }else
                                                        {
                                                    ?>
                                                            <th style="background:#ff6600; text-align:right;"><a style="color:#fff;">0</a></th>
                                                            <th style="background:#ff6600; text-align:right;"><a style="color:#fff;">0</a></th>

                                                            <th style="background:#ff6600; text-align:right;"><a style="color:#fff;">0</a></th>
                                                            <th style="background:#ff6600; text-align:right;"><a style="color:#fff;">0</a></th>

                                                            <th style="background:#ff6600; text-align:right;"><a style="color:#fff;">0%</a></th>
                                                            <th style="background:#ff6600; text-align:right;"><a style="color:#fff;">0%</a></th>
                                                    <?php 
                                                        }
                                                    }
                                                    ?>
                                               @endforeach
                                               </tr>
                                            <?php
                                            }
                                            ?>
                                        @endforeach
                                        <!-- Grand Total -->
                                        <tr>
                                            @foreach($date_report as $index => $date)
                                                <?php 
                                                    if(isset($grand_total[$date]) and $date == $grand_total[$date]->date_report)
                                                    {
                                                ?>
                                                    <td align="right" style="background:#cc3300;"><a style="color:#fff;"><strong>{{ number_format($grand_total[$date]->rekening, 0, ',', '.') }}</strong></a></td>
                                                    <td align="right" style="background:#cc3300;"><a style="color:#fff;"><strong>{{ number_format($grand_total[$date]->instanding, 0, ',', '.') }}</strong></a></td>
                                                <?php
                                                    }
                                                ?>
                                            @endforeach

                                            @foreach($date_report as $index => $date)
                                               @if ($index < count($date_report) - 1)
                                                    <?php
                                                    if( isset($grand_total[$date]) and $date == $grand_total[$date]->date_report)
                                                    {
                                                        $delta_rek = number_format($grand_total[$end_date]->rekening - $grand_total[$date]->rekening, 0, ",", ".");
                                                        $delta_instanding = number_format($grand_total[$end_date]->instanding - $grand_total[$date]->instanding, 0, ",", ".");
                                                    ?>
                                                        @if($delta_rek < 0)
                                                           <?php $class_delta = "danger"; ?>
                                                        @elseif($delta_rek == 0)
                                                           <?php $class_delta = "warning"; ?>
                                                        @elseif($delta_rek > 0)
                                                           <?php $class_delta = "success"; ?>
                                                        @endif
                                                        <td align="right" style="background:#cc3300;"><a style="color:#fff;"><strong>{{ $delta_rek }}</strong></a></td>
                                                        @if($delta_instanding < 0)
                                                           <?php $class_instanding = "danger"; ?>
                                                        @elseif($delta_instanding == 0)
                                                           <?php $class_instanding = "warning"; ?>
                                                        @elseif($delta_instanding > 0)
                                                           <?php $class_instanding = "success"; ?>
                                                        @endif
                                                        <td align="right" style="background:#cc3300;"><a style="color:#fff;"><strong>{{ $delta_instanding }}</strong></a></td>
                                                    <?php
                                                    }
                                                    ?>
                                                @endif
                                            @endforeach

                                            @foreach($target_grand_total as $rka)
                                                <td align="right" style="background:#cc3300;"><a style="color:#fff;"><strong>{{ number_format($rka->rekening, 0, ',', '.') }}</strong></a></td>
                                                <td align="right" style="background:#cc3300;"><a style="color:#fff;"><strong>{{ number_format($rka->instanding, 0, ',', '.') }}</strong></a></td>
                                            
                                                <?php
                                                    $delta_grand_total_rka_rek = number_format($grand_total[$end_date]->rekening - $rka->rekening, 0, ",", ".");
                                                    $delta_grand_total_rka_instanding = number_format($grand_total[$end_date]->instanding - $rka->instanding,  0, ",", ".");

                                                    $pencapaian_grand_total_rekening = round(($grand_total[$end_date]->rekening / $rka->rekening) * 100, 2) ;
                                                    $pencapaian_grand_total_instanding = round(($grand_total[$end_date]->instanding / $rka->instanding) * 100, 2);
                                                ?>

                                                <td align="right" style="background:#cc3300;"><a style="color:#fff;"><strong>{{ $delta_grand_total_rka_rek }}</strong></a></td>
                                                <td align="right" style="background:#cc3300;"><a style="color:#fff;"><strong>{{ $delta_grand_total_rka_instanding }}</strong></a></td>

                                                <td align="right" style="background:#cc3300;"><a style="color:#fff;"><strong>{{ $pencapaian_grand_total_rekening }}%</strong></a></td>
                                                <td align="right" style="background:#cc3300;"><a style="color:#fff;"><strong>{{ $pencapaian_grand_total_instanding }}%</strong></a></td>
                                            @endforeach 
                                        </tr>
                                        <!-- End Grand Total -->
                                    @endforeach
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @endif
    @include('ebri::savings.modals_menu')   
    @include('ebri::savings.modals_export')  
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