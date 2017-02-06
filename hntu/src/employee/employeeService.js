app.service('employeeService',function(){
  var employees = [{
    stt: 1,
    name: 'Huynh Ngoc Tu',
    address: 'Nga Bay - Hau Giang',
    age: 24,
    sex: "Female"
  },{
    stt: 2,
    name: 'Bui Bich Ngoc',
    address: 'Am Tien - Thanh Hoa',
    age: 24,
    sex: "Female"
  },{
    stt: 3,
    name: 'Ly Kieu Le',
    address: 'Tran De - Soc Trang',
    age: 24,
    sex: "Female"
  }];
  return employees;
});
