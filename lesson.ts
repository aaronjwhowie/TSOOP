/*  
--------------- Presentation Slot ---------------
Source Material:

https://www.youtube.com/watch?v=uTIy6MspSK0

---------------------------------------------------

https://www.bennadel.com/blog/3100-thinking-about-static-vs-private-methods-in-typescript-angular-2.htm#:~:text=Unlike%20public%20and%20private%20methods,the%20instances%20of%20the%20class.

---------------------------------------------------

https://www.tutorialsteacher.com/typescript/data-modifiers

---------------------------------------------------


Wednesday 1/11/23 2:40pm Student 1 


Schedule:
https://docs.google.com/spreadsheets/d/13bgDPEeN5v4z8hDOyqnm-idp4_cLdwd3Zbw5J2VRQYs/edit#gid=0



Zoom Link :
https://redventures.zoom.us/j/95939454952?pwd=UTlkSDQ0VlR4WlhLbnF2alZ5V1JlZz09&from=addon


Full Requirements:
https://docs.google.com/document/d/1Q5SDjyE9c6D-EkMGC1JARXxg_qEuD3pQ12MZYCURsnE/edit#



Presentation Slides:
https://docs.google.com/presentation/d/1KaZ8mtSC6K56-XW0HH2Xjjhh-2jpAov-hsxy3V_Hyms/edit?usp=sharing

--------------- Requirements ---------------

All the classes you create must contain a constructor method, 
and 2 methods.  


--------------- First Half ---------------


Terms (OOP- object oriented programming)

Encapsulation 
Abstraction 
Inheritance 
Polymorphism 

 

--------------- Second Half ---------------
You Must Include a Github Readme file Essay 2 Paragraphs explaining these terms and
why we would use them  -  Static, Protected, private.


*/



/* --------------- Inheritance  --------------- 




Inheritance is the ability of one class to inherit
the attributes and methods of another class. 

---------------------------------------------------  */


 // Classes are what we use to define the variable type
class Person {   
    name: string;  
    age: number;  


    // Constructors are what we use to assign a value to a variable
    constructor(name:string, age:number) {   
         this.name = name;   
          this.age = age;  }  
}

/* --------------- Inheritater --------------- */
/* There are two types of Inheritance Extends and Implements 

Extends allows the subclass to utilize properties from the superclass

While Implements forces the subclass to conform to the superclass, 
Throwing an error if it does not mirror the superclass

Analogy

Extend = Child with Traits

Implement = Doppleganger 
*/


class Chef extends /* implements */ Person {  occupation: string;  
        
        
constructor(name:string, age:number, occupation: string){  
              super(name, age)    
              this.occupation = occupation; 
            }   
            
            }


/* ----------------- Encapsulation -----------------


Encapsulation is the process of hiding information 
within an object so that it cannot be accessed directly
 from outside the object.


Encapsulaton = Restrictions
---------------------------------------------------

Static : can only be accessed directly on the class and cannot be inherited 

Static has no ".this" method. It cannot be reference and remains the same 
(Ultimate Const)

Static is only available on the class and is not available on the
 instances of the class


 Static = Cannot be inherited or called at all
---------------------------------------------------

Private : Cant be accessed anywhere outside the class and cant be inherited


Private  = Cannot be inherited just like static but can be referenced and called indirectly
---------------------------------------------------

Protected : Protected is similar to Private but the deriving classes can
inherit its properties.


Protected = The deriving class can inherit properties no other classes
---------------------------------------------------  */


class A {  
    constructor(public variable: string){}
}



const object = new A('10');



/* ------------------ Abstraction -----------------



Abstraction is the process of hiding the implementation 
details of an object so that it can be used without
understanding how it works.


Within this example we have given first and last name a new variable to be placed under
whenever we call full name the client is receiving both the first and last name
without actually getting them directly
---------------------------------------------------  */



abstract class Employee {
    constructor(private firstName: string, private lastName: string) {
    }
    abstract getStipend(): number
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement(): string {
        return `${this.fullName} makes ${this.getStipend()} a month.`;
    }
   }











/* --------------- Polymorphism ---------------


Polymorphism is the ability of an object to take
 on multiple forms.




 Polymorphisms is inheritance with the shift in a particular aspect of
 the inherited method



The deriving class inherits the superclasses properties but changes an aspect about
it to personalize it.

Class C is taking on a new form that is Class B

 Analogy - 

Both chargers plug into an iphone but the other ends of each is different.


 USB-C
 USB
---------------------------------------------------  */


class C {  
name: string = "Class C"  
print(){    
    console.log('I am class C')  
}}



class B extends C {  
name: string = "Class B"  
print(){    
    console.log('I am class B') 
}}


