<div id="branch-office-modals-export-excel" class="modal ebri-modal fade" data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <a class="close" data-dismiss="modal" aria-hidden="true">×</a>
                <h4 class="modal-title">Export Excel Reports</h4>
            </div>

            <div class="modal-body align-center">
                <img src="http://ebri.dev/packages/andriynto/ebri/images/icons/xlsx.png" alt="" width="100">
                <br><br>
                <strong>application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</strong>
                <div class="panel panel-primary">
                    <div class="panel-heading">File Information</div>
                    <table class="table">
                         <tr>
                            <td><strong>Segmentase</strong></td>
                            <td><strong>{{ ucfirst($code) }}</strong></td>
                        </tr>
                        <tr>
                            <td><strong>Date</strong></td>
                            <td>
                                <strong>
                                @foreach($date_header as $date)
                                    {{ $date }}, 
                                @endforeach
                                </strong>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Layout</strong></td>
                            <td><strong>BranchOffice</strong></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="modal-footer">
                    <a href="http://ebri.dev/savings/export?code={{$code}}&layout=branchoffice" target="_blank" class="btn btn-primary download-act">
                        <i class="glyphicon glyphicon-download glyphicon-white"></i> Generate
                    </a>
                    <a class="btn btn-default" data-dismiss="modal" aria-hidden="true">Close</a>
            </div>
        </div>
    </div>
</div>