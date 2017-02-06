app.factory('employeeFactory',function(){
  var employees = [{
    name: 'Huynh Ngoc Tu',
    address: 'Nga Bay - Hau Giang',
    email: 'hntu@gmail.com',
    phone: '0974 68 52 54',
    age: 24,
    sex: 'Female'
  },{
    name: 'Bui Bich Ngoc',
    address: 'Am Tien - Thanh Hoa',
    email: 'bbngoc@gmail.com',
    phone: '01675 22 11 58',
    age: 24,
    sex: 'Female'
  },{
    name: 'Nguyen Thao Ngoc',
    address: 'Am Tien - Thanh Hoa',
    email: 'ntngoc@gmail.com',
    phone: '0974 68 52 54',
    age: 24,
    sex: 'Female'
  }];
  return{
    get: function() {
      return employees;
    },
    find: function(index) {
      return employees[index];
    },
    create: function(e){
      employees.push(e);
    }
  };
});
