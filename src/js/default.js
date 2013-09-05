var server = "http://rest-laravel/api/v1/";

$('document').ready(function(){

	$.ajax({
		url: '/src/data/clientes.json',
		dataType: 'json',
		type: 'get',
		success: function (data) {
		$.Mustache.load('/src/plugins/mustache/template/cliente.html').done(function () {

		    $('.panel-body').mustache('grid', data);
		});


			}
	});

	$(".btn-cliente-manager").live('click', function(){
		$('#modalCliente .modal-body').html('');

		$.Mustache.load('/src/plugins/mustache/template/cliente.html').done(function () {
		    $('#modalCliente .modal-body').mustache('form');
		    $('#modalCliente').modal('show');
		});
	});

	$(".btn-cliente-reset").live('click', function(){
		$('#modalCliente .modal-body').html('');
		$('#modalCliente').modal('hide');
	});


	$(".btn-cliente-delete").live('click', function(){
		if(confirm("Deseja realmente remover o registro?")){
			$(this).parents('tr').fadeOut();
		}
	});

});

