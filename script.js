let  emp_1={id:1,
            firstName:"Hemanth",
            LastName:"Kumar",
            email:"hk@gmail.com",
            gender:"Male"
};

let  emp_2={id:2,
    firstName:"Kushal",
    LastName:"Kumar",
    email:"kk@gmail.com",
    gender:"Male"
};
let emp_3={
    id:3,
    firstName:"Bala",
    LastName:"Subbu",
    email:"bs@gmail.com",
    gender:"Male"
};

let emp_4={
    id:4,
    firstName:"Divya",
    LastName:"shree",
    email:"ds@gmail.com",
    gender:"Female"
}
let emp_5={
    id:5,
    firstName:"Reshma",
    LastName:"Blacky",
    email:"rb@gmail.com",
    gender:"Female"
}
let employess=[emp_1,emp_2,emp_3,emp_4,emp_5];

function displayele(emp){
    let emplyEle=``;
    for(let i of emp){
        emplyEle+=`<tr>
                        <td>${i.id}</td>
                        <td>${i.firstName}</td>
                        <td>${i.LastName}</td>
                        <td>${i.email}</td>
                        <td>${i.gender}</td>
                    </tr>`
    }
    document.getElementById('display').innerHTML=emplyEle;
}
//to fetch male employees
let maleEmp=employess.filter(function(emp){
    return emp.gender=='Male';
});
let Femaleemp= employess.filter(function(emp){
    return emp.gender=='Female';
});
    



//To display Elements Based on All,Genders
let allEmp=document.querySelector('#all-emp');
let Femele=document.querySelector('#female-emp');
let maleele=document.querySelector('#male-emp');


allEmp.addEventListener('click',function(){
    displayele(employess);
});

Femele.addEventListener('click',function(){
    displayele(Femaleemp);
})
maleele.addEventListener('click',function(){
    displayele(maleEmp);
})

//Code for Search Box;
let SearchEle=document.querySelector('#search');
SearchEle.addEventListener('keyup',function(){
    let Searched_value=SearchEle.value.toUpperCase().trim();
    
        let Elements_=Searched(Searched_value,employess);
    if(Searched_value.length>0){
        displayele(Elements_);
    }  else{
        displayele(employess);
    }
    
    

})

function Searched(ele,emps){
    let searchedArr=[];
    for(let i of emps){
        let name=i.firstName.toUpperCase().trim();
        if(name.startsWith(ele)){
            searchedArr.push(i);
            console.log(searchedArr);
        }
    }
    return searchedArr;
}
