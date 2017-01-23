app.service('SharedDataService', function () {
    var students = [{
      name: 'Thuan Pham',
      address: 'Ha Noi'
    },{
      name: 'Tu Huynh',
      address: 'Hau Giang'
    },{
       name: 'Ngoc Bui',
       address: 'Thanh Hoa'
   }];
    return students;
});
