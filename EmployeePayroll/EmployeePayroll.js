class EmployeePayrollData{
    
    // constructor(...params){
    //     this._name = params[0];
    //     this._profileImage = params[1];
    //     this._gender = params[2];
    //     this._department = params[3];
    //     this._salary = params[4];
    //     this._startDate = params[5];
    //     this._notes = params[6];
    // }

    get name(){
        return this._name;
    }
    set name(name){
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        console.log("Name : "+ name);
        if(nameRegex.test(name)){
            this._name = name;
        }else{
            throw "Invalid name";
        }
        
    }

    get profileImage(){
        return this._profileImage;
    }
    set profileImage(profileImage){
        this._profileImage = profileImage;
    }

    get gender(){
        return this._gender;
    }
    set gender(gender){
        this._gender = gender;
    }

    get department(){
        return this._department;
    }
    set department(department){
        this._department = department;
    }

    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary = salary;
    }

    get startDate(){
        return this._startDate;
    }

    /* UC 10 */
    set startDate(startDate){
        const future = new Date();
        future.setDate(future.getDate()+30);
        if(startDate < new Date() || startDate <future){
            this._startDate = startDate;
        } else {
            throw "Start date is invalid";
        }
    }

    get notes(){
        return this._notes;
    }
    set notes(notes){
        this._notes = notes;
    }

    toString(){
        return "Name : "+this.name+", Profile Image : "+this.profileImage+", gender : "+this.gender
        +", Department : "+this.department+ ", Salary : "+this.salary+" , start date : "+ this.startDate
        +", notes : "+this.notes;
    }

}

function save(){

    //Name
    let employeeName = document.getElementById("name").value;
    
    //Profile
    let employeeProfileImage = document.querySelector('input[name="profile"]:checked').value;

    //Gender
    let employeeGender = document.querySelector('input[name="gender"]:checked').value;
    
    //Department
    let employeeDepartment = document.querySelectorAll(".checkbox");
    let employeeDepartmentArr = [];
    for(let emp of employeeDepartment){
        if(emp.checked){
            employeeDepartmentArr.push(emp.value);
        }
    }
    //salary
    let employeeSalary = document.querySelector("#salary").value;
    
    //Start Date
    let day = document.querySelector('#day').value;
    let month = document.querySelector('#month').value;
    let year = document.querySelector('#year').value;
    
    let employeeStartDate = new Date(year,month,day);
    
    //Notes
    let employeeNotes = document.querySelector('#notes').value;

    try{
        let employeePayroll = new EmployeePayrollData         
        employeePayroll._id = new Date().getTime();
        employeePayroll._name = employeeName;
        employeePayroll._profileImage = employeeProfileImage;
        employeePayroll._gender = employeeGender;
        employeePayroll._department = employeeDepartment;
        employeePayroll._salary = employeeSalary;
        employeePayroll._startDate = employeeStartDate;
        employeePayroll._notes = employeeNotes;
        
        alert(employeePayroll.toString());
        createAndUpdateStorage(employeePayroll)
        
    }catch(e) {
        console.error(e);
    }   
}

/* Day44 -UC4*/
function createAndUpdateStorage(employeePayrollData)
{
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));

    if(employeePayrollList != undefined)
    {
        employeePayrollList.push(employeePayrollData);
    }
    else
    {
        employeePayrollList = [employeePayrollData]
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
}




