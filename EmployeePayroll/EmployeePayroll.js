class EmployeePayrollData{
    /*Day 44 -UC1*/
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