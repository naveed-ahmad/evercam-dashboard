table = null

updateLogTypesFilter = () ->
  exid = $('#exid').val()
  page = $('#current-page').val()
  types = []
  $.each($("input[name='type']:checked"), ->
    types.push($(this).val())
  )
  from = new Date($('#datetimepicker').val()).getTime()/ 1000
  to = new Date($('#datetimepicker2').val()).getTime()/ 1000
  fromto_seg = ''
  fromto_seg += '&from=' + from unless isNaN(from)
  fromto_seg += '&to=' + to unless isNaN(to)
  table.ajax.url($('#base-url').val()+ "&page=" + page + "&types=" + types.join() + fromto_seg).load()
  true

toggleAllTypeFilters = ->
  if $('#all-types').is(':checked')
    $("input[name='type']").prop('checked', true);
  else
    $("input[name='type']").prop('checked', false);

initializeLogsTab = ->
  $('#apply-types').click(updateLogTypesFilter)
  $(".datetimepicker").datetimepicker()
  $('#all-types').click(toggleAllTypeFilters)
  table = $('#logs-table').DataTable({
    "ajax": {
      'url': $('#ajax-url').val(),
      'dataSrc': 'logs'
    },
    'columns': [
      {data: ( row, type, set, meta ) ->
        return moment(row.done_at*1000).format('MMMM Do YYYY, H:mm:ss')
      },
      {data: ( row, type, set, meta ) ->
        if row.action is 'shared' or row.action is 'stopped sharing'
          return row.action + ' with ' + row.extra.with
        return row.action
      , className: 'log-action'},
      {data: ( row, type, set, meta ) ->
        if row.action is 'online' or row.action is 'offline'
          return 'System'
        return row.who
      }
    ],
    'iDisplayLength': 50
  })
  true

if !window.Evercam
  window.Evercam = {}

window.Evercam.Logs =
  initializeTab: initializeLogsTab