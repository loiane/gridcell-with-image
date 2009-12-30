Ext.onReady(function(){

	Ext.BLANK_IMAGE_URL = '/gridcell-with-image/ext-3.1.0/resources/images/default/s.gif';

	//image path
	var IMG_EMAIL = '/gridcell-with-image/img/email_link.png';
    
	//renderer function
	function renderIcon(val) {
        return '<a href="mailto:' + val + '">'+ '<img src="' + IMG_EMAIL + '"> ' + val  +'</a>';
    }
	
	//array with data - dummy data
    var myData = [
        ['Meyers, Quyn R.',	    '(943) 570-5141', 'Proin@nullamagna.ca',    '05/13/1990'],
		['Whitney, Tad T.',	    '(547) 743-0343', 'vulputate@acurnaUt.org', '05/10/1987'],
		['Lawrence, Flavia J.',	'(404) 826-4553', 'dapibus.id@accumsan.ca',	'01/05/1988'],
		['Morales, Susan I.',	'(276) 707-8084', 'tristique@seacmetus.com','03/09/1992'],
		['Merrill, Desiree Q.', '(911) 546-0559', 'dictum.cursus@vel.ca',   '01/07/1981'],
		['Hampton, Willa Y.',	'(729) 562-8303', 'nascetur@stellus.ca',    '06/17/1991'],
		['Brewer, Brynne F.',	'(818) 302-4393', 'ligula@ullamcorper.org',	'04/20/1989'],
		['Marsh, Drew D.',	    '(645) 671-2779', 'et.euismod.et@eget.ca',	'02/13/1990']
    ];

    //data store - description of fields
    var store = new Ext.data.SimpleStore({
        fields: [
           'name',
           'phone',
           'email',
           {name: 'birthday', type: 'date', dateFormat: 'd/m/Y'}
        ]
    });

    //read the data from simple array
    store.loadData(myData);

    // create grid
    var grid = new Ext.grid.GridPanel({
        store: store,
        columns: [
            {header: 'NAME', width: 170, sortable: true, dataIndex: 'name'},
            {header: 'PHONE #', width: 150, sortable: true, dataIndex: 'phone'},
            {header: 'BIRTHDAY', width: 100, sortable: true, dataIndex: 'birthday',
            	renderer: Ext.util.Format.dateRenderer('d/m/Y')},
            {header: 'EMAIL', width: 160, sortable: true, dataIndex: 'email',
            	renderer: renderIcon }	
        ],
        title: 'My Contacts',
        autoHeight:true,
        width:600,
		renderTo: document.body,
		frame:true
    });

    //render to DIV
    grid.render('gridcell-with-image');
});