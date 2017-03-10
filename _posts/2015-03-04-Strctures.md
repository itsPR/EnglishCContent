---
layout: post
title: "Structures"
subtitle: ""
section: structures
---



### 1.1 Definition:


* Structure is a group of data members irrespective of their type.
* Using structure you can relate one variable of one type to other.
* Different types of variables can stored under one name, so if you want to store information like name, address , phone number you can use structures and can store all this for different persons.



**Syntax:**

{% highlight c %}
                struct tag {
               type member 1;     
               type member 2;          
                    :
                    :             
               type member m;
                    };  

{% endhighlight%}



* Data members include pointers, arrays as well.

* t1 here is structure variable.

* struct tag is new data type of t1.

We can define structure variable in following way

       {% highlight c %}                     

struct tag t1;       

* struct is a keyword, so write it as it is.

* tag can be replaced by any name you want structure to have.

* member 1, member 2 are data members which can be of same or different data type.

 struct tag {
                 member 1;     
                 member 2;          
                    :         
                 member m;
                        }t1;  

{% endhighlight%}

### 1.2  Structure variables:

* Structure variables are those variables which are used to access data members of the structure. 
* They can be defined as follows
       struct tag *var_1, var_2 … var_n;*
* Structure variable can be many, and can be represented as arrays like *var[100]*
var[100] implies that there are 100 variables which are represented in the form of an  array. *var[0],var[1],var[2]…… var[99]*(we will see in the following example).
**Example:**
 {% highlight c %} 
#include<stdio.h>
struct stud
{
int rollno,s1,s2,tot;
char name[30];
float avg;
};
struct stud s[10];
int main()
{
 int i,n;
 printf("enter the number of students\n");
 scanf("%d",&n);
 for(i=0;i<n;i++)
 {
  printf("Enter the roll number\n");
  scanf("%d",&s[i].rollno);
  printf("Enter the name\n");
  scanf("%s",s[i].name);
  printf("enter the marks in 2 subjects\n");
  scanf("%d%d",&s[i].s1,&s[i].s2);
  printf("s2 is: %d\n",s[i].s2);
 }
 for(i=0;i<n;i++)
 {
  printf("roll number: %d \n name: %s \n subject1: %d \n subject2: %d\n",s[i].rollno,s[i].name,s[i].s1,s[i].s2);
 }
}
{% endhighlight%}


* By this small code of structures we can understand that whenever we have to store different type of information about many people we can use structures.
* Here each structure variable represents a person.
* And the data accessed by structure variable is the information of that person.
* We can also observe that instead of defining structure variables as s1,s2,s3…s10 we defined it in the form of an array s[10].
* So whenever there is any need to store data for large number of people writing structure variable in the form of an array can make things quite easier.


### 1.3 Structure Initialisation:

* Structure variables can be initialised as follows:
_**Struct tag name={ value_for_data1,value _for_data2…, value_for_data n}**_

**Example**

{% highlight c %}

#include <stdio.h>
 
struct example {
  int x;
  int y;
};
 
int main()
{
  struct example e1 = {10, 20};
  printf("values\n: e1.x=%d\te1.y=%d",e1.x,e1.y);
  getchar();
  return 0;
}

{% endhighlight %}

### 1.4 Structure Variables

Copying data of one structure variable to other is quite easy, and can be done as shown
    _**struct_var1=struct_var2.**_

{% highlight c %}

**Example**

#include <stdio.h>
 
struct example {
  int x;
  int y;
};
 
int main()
{
  struct example e1 = {10, 20};
  struct example e2 = e1; // works: contents of e1 are copied to e1
  printf("values\n: e2.x=%d\te2.y=%d",e2.x,e2.y);
  getchar();
  return 0;
}

{% endhighlight c %}


Output:
values:
e2.x=10		e2.y=20


* We can see that though p2.x and p2.y were not initialised still in output we can see their values as 10 and 20.
* It is because we assigned one structure variable to other of same type i.e. same structure p2=p1.

### 1.5 Typedef

* Typedef is a keyword used in C language to assign alternative names to existing types.
* Typedef can be used to give a name to user defined data type as well.

`Syntax:`
typedef struct
{
                                           type member 1;     
               type member 2;          
                    :
                    :             
               type member m;

} type_name;


* Now type_name can be used to declare a variable of this structure type.
       **type_name t1,t2;**
* Now t1 and t2 can be used as normal structure variable.

**Example**

{% highlight c %}

#include <stdio.h> 
typedef struct {
  int x;
  int y;
}exp;
  exp e1;
int main()
{
printf("enter x and y\n");
scanf("%d%d",&e1.x,&e1.y);
  printf("values\n: e1.x=%d\te1.y=%d",e1.x,e1.y);
  getchar();
  return 0;
}

{% endhighlight c %}


### 1.6 Passing Parameter to the function:

* Structure variable can be passed as parameters to any function.
* It can done as follows.

**Example:**

{% highlight c %}
#include <stdio.h> 
typedef struct {
  int x;
  int y;
}exp;
  exp e1;
void display(exp e)
{
printf("numbers entered are: %d\t%d",e.x,e.y);
}
int main()
{
printf("enter x and y\n");
scanf("%d%d",&e1.x,&e1.y);
display(e1);
  getchar();
  return 0;
}

{% endhighlight c %}


### 1.7 Returning structure variables:
We can return structure variables from any function, like any other variable.
The return type of the function should be same as that of the structure variable we are returning.
**Example:**
{% highlight c %}
#include <stdio.h> 
typedef struct {
  int x;
  int y;
  int z;
}exp;
  exp e1;
exp sum(exp e)
{
 exp ex;
 ex.z=e.x+e.y;
return ex; 
}
int main()
{
printf("enter x and y\n");
scanf("%d%d",&e1.x,&e1.y);
exp i=sum(e1);
printf("sum of two numbers entered is: %d",i.z);
      getchar();
      return 0;
}

{% endhighlight c %}


