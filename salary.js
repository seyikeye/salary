function calculateSalary(employee){
  
  
  var basic = 5000;
  // var employee;
  
  switch(employee){
    case 'intern':
      return ("Your total salary is: " + basic);
      
    case 'associate' :
      return ("Your total salary is: " + (basic + 100000));
    
    case 'manager':
      return ("Your total salary is: " + (basic + 200000));
      
    case 'executive':
      return ("Your total salary is: " + (basic + 300000));
      
    case 'director':
      return ("Your total salary is: " + (basic + 400000));
      
    default:
      return 'No salary specified';
  }
  
}