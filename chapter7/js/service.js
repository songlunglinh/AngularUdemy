(function(){
  app.factory('employeeFactory', employeeFactoryFunc);

  function employeeFactoryFunc(){
    var obj = [{
      name: 'Bui Bich Ngoc',
      address: 'Am Tien - Thanh Hoa',
      email: 'bbngoc@gmail.com',
      phone: '090889989',
      age: 24,
      sex: 'Female'
    },{
      name: 'Huynh Ngoc Tu',
      address: 'Nga Bay - Hau Giang',
      email: 'hntu@gmail.com',
      phone: '090889933',
      age: 24,
      sex: 'Female'
    },{
      name: 'Ly Kieu Le',
      address: 'Tran De - Soc Trang',
      email: 'lkle@gmail.com',
      phone: '090889981',
      age: 24,
      sex: 'Female'
    }];
    return {
			get: function() {
				return obj;
			},
			find: function( index ) {
				return obj[ index ];
			},
			add: function( e ) {
				obj.push( e );
			},
			remove: function( id ) {
				obj.splice( id, 1 );
				console.log( "removed" );
				console.log( obj );
			}
		}
  };
}());
