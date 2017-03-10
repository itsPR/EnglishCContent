---
layout: post
title: "Funcitons"
subtitle: ""
section: functions
---



###  1.1<u>Definition:</u>

Piece of code used to accomplish certain task.<br>
A function contains it’ name, return type,
arguments and body.

Example: Function to print “hello”
# code:
{% highlight c %}
                void func ()  
{
printf("hello");// body of function
}

{% endhighlight%}

In the example above we can see the following:

<ul>
  <li>Function name: func</li>
  <li>Return type: void</li>
  <li>Body: printf(“hello”);</li>
</ul>

### 1.2 <u>Advantages of using functions:</u>
<ol>
  <li>We can divide c program in small sized codes (modules).</li>
  <li>We can call module whenever require. </li>
  <li>Modular programming makes C program more readable.</li>
  <li>Modules once created, can be re-used in other programs.</li>
</ol>

### 1.3 <u>Types of Functions:</u>

<ol>
  <li>Predefined functions: </li>
  <OL>
    <li>Functions which are already defined are predefined functions.</li>
    <li>These function’s name or task can’t be changed by programmers and they are used for specific tasks.</li>
    <li>Example: printf(), scanf(), getch(), putch() etc.</li>
  </OL>  
</ol>

### 2.<u>User defined functions:</u>

<OL>
    <li>Functions which are defined by user or programmers with respect to their need.</li>
    <li>Name of function, return type and body is defined by user.</li>
    <li>Example: Program to print Hello World.</li>
  </OL>  

#code

{% highlight c %}
  
#include<stdio.h>
void intro()
{
printf("Hello World");
}

int main()
{
  intro();
}

{% endhighlight%}

<ul>
  <li>In example given above intro() is a user defined function where function prototype and definition is given by user according to his/her requirements.</li>
  <li>Whereas printf() is a predefined function whose definition and prototype can’t be changed by user.</li>
</ul>

### 1.4 <u>A Function Prototype:</u>

In C, all functions must be written to return a specific TYPE of information and to take in specific types of data (parameters). This information is communicated to the compiler via a function prototype.<br>
Here is the syntax for the function declaration or **Prototype:**
_Return-type name_of_function (parameter_type parameter_name,…)_<br>
In parenthesis we can write many parameters based on our requirements.<br>

**Example of Functions:**<br>

If in a program we have to add two numbers 3 times we can write it in following way.<br>
# code 

{% highlight c %}

#include<stdio.h>
int main()
{
int a, b, sum; // first time
printf("enter two numbers\n");
scanf("%d %d", &a, &b);
sum = a + b;
printf("sum %d\n", sum);

printf ("enter two numbers\n"); // second time
scanf("%d %d", &a, &b);
sum= a + b;
printf("sum %d\n", sum);

printf("enter two numbers\n"); //third time
scanf("%d %d", &a, &b);
sum= a + b;
printf("sum %d\n", sum);
}

{% endhighlight%}

We wrote the same code for adding numbers for 3 times, but using function we can make our code smaller and easily readable.<br>

# code

{% highlight c %}

#include<stdio.h>
void add()
{
  int a, b, sum; 
printf("enter two numbers\n");
scanf("%d %d", &a, &b);
Sum = a + b;
printf("sum %d\n", sum);
}

void main()
{
  add();
  add();
  add();
}

{% endhighlight%}

<ul>
  <li>Now in the example  you can see that instead of writing a code snippet for 3 times we wrote it just once in function add() and just called it from main() 3 times.</li>
  <li>This makes our code <strong>smaller</strong> and <strong>easier</strong> to understand.</li>
</ul>

### 1.5 <u>Function Call:</u>

<ol>
  <li>In the previous example add(); is function call.</li>
  <li>Function call should be made by ending Semicolon.</li>
</ol>
### 1.6 <u> Passing parameters to Functions</u><br>
 In above example we saw calling functions without passing any parameters, but if we want we can pass parameters to function while calling it.

Example: Program to swap two numbers.<br>

# code
<br>

{% highlight c %}

#include<stdio.h>
void swap(int a, int b)
{  int tmp;
    tmp = a;
    a = b;
    b = tmp;
    printf (" values after swap  m = %d \n and n = %d", a, b);
}

int main()
{
    int m = 22, n = 44;
    // calling swap function by value
    printf (" values before swap  m = %d \n and n = %d", m, n);
    swap (m, n);                         
}
{% endhighlight%}

<ul>
  <li>In above example main() is passing two variables m and n to swap (), swap() function contains two variables (a and b) where value of m and n is copied, here a and b are known as **function arguments**.</li>
  <li>Swap (int a, int b) is an example of function with argument and without return value.</li>
  <li>In above program it is not necessary to define user defined function i.e swap (int a, int b) first, if needed any function can be defined after main () function in following way.</li>
</ul>

Example: Program to swap two numbers.<br>
# code

{% highlight c %}

#include<stdio.h>
void swap (int, int); // define function’s prototype before main().
int main ()
{
    int m = 22, n = 44;
    // calling swap function by value
    printf (" values before swap m = %d \n and n = %d", m, n);
    swap (m, n); 
}

void swap (int a, int b)
{ 
    int tmp;
    tmp= a;
    a = b;
    b = tmp;
    printf(" \n values after swap m = %d\n and n = %d", a, b);
}


{% endhighlight%}

<ul>
  <li>This example shows how any main () can be defined before any other function by just defining the prototype of the function before main ().</li>
  <li>While defining the prototype it is not necessary to write variable name as shown in the example, 
i.e. void swap (int, int).</li>
  <li>But while writing definition of function make sure to write arguments name as well, like void swap(int a, int b).</li>
</ul>

### 1.6.1 <u>Methods of passing parameters to functions:</u>
<ul>
  <li>Pass by value</li>
  <li>Pass by reference</li>
  </ul>

### 1.6.1.1 <u>Pass by value:</u>
<br>
<ol>
  <li>In pass by value we pass the parameters to the function, where the values of parameters is copied in arguments of the function.</li>
  <li>Any change made on those arguments in that function will not be reflected in actual variables (i.e parameters).</li>
<br>
Example: Program to swap two numbers.
# code

{% highlight c %}

#include<stdio.h>
void swap(int a, int b)
{ 
    int tmp;
    tmp = a;
    a = b;
    b = tmp;
} 
int main()
{
    int m = 22, n = 44;
    // calling swap function by value
    printf(" values before swap m = %d  and n = %d\n", m, n);
    swap (m, n);              
   printf("values after swapping m=%d and n=%d\n",m,n);           
}

{% endhighlight%}

OUTPUT: values before swap m=22 and n=44
             values after swapping m=22 and n=44 

<ol>
  <li>In previous example after swapping the values of m and n is still the same, their copies in function swap
(i.e. a and b) were swapped.</li>
  <li>This is because values of a and b were not reflected on variable m and n.</li>
</ol>
</ol>
<br>

### 1.6.1.2 <u>Pass by reference:</u>
<ol>
  <li>In pass by reference we pass the actual parameters address to the function.</li>
  <li>This address of parameters get copied to the reference variable of the function.</li>
  <li>Now any change made on those arguments will be reflected on 
  actual parameters.</li>
</ol>  

Example:

# code

{% highlight c %}

#include<stdio.h>
void swap(int *a, int *b)
{ 
    int *tmp;
    *tmp = *a;
    *a = *b;
    *b = *tmp;
}

int main()
{
    int m = 22, n = 44;
    // calling swap function by value
    printf(" values before swap  m = %d  and n = %d\n", m, n);
    swap (&m, &n);              
   printf("values after swapping m=%d and n=%d\n", m, n);      }     

{% endhighlight%}

<br>
OUTPUT: values before swap m=22 and n=44
             values after swapping m=44 and n=22 
<ul>
  <li>In this example we saw that the parameters were passed to functions where their address was copied.</li>
  <li>Hence every change made on those arguments( a and b)
were reflected in actual parameters (m and n) because
all changes were done in address directly.</li>
</ul>

### 1.6.2.1 <u>Passing Array to Function:</u>
<ul>
  <li>Arrays can also be passed to functions like any other variable.</li>
  <li>To pass an array just write the name of the array while</li> calling the function as shown in following example.</li>
  <li>The function prototype should be like</li>
return-type (data_type array_name[]).
  <li>Example: To find sum 5 numbers by passing 1D array to function.</li>
</ul>

# code

{% highlight c %}

#include <stdio.h>

  int  sum( int a[] )
  {
    int  sum=0, i;
    
    for( i = 0; i < 5; ++i )
    sum=sum+a[i];
    return sum;
  }
  
  main()
  {
    int values[5], i, add;
    
    printf("Enter 5 numbers\n");
    for( i = 0; i < 5; ++i )
      scanf("%d", &values[i] );
    
    add = sum( values );
    printf("\n Sum  is %d\n", add );
  }

{% endhighlight%}

<ul>
  <li>Same is for passing <strong>2-D</strong> array except  function prototype should be as follows:</li>
  <li><strong>return-type (data_type array_name[][number_of_column).</strong></li>
  <li>Example: To pass a <strong>2-D</strong> array to other function and display it.</li>
</ul> 
<br>
# code

{% highlight c %}


#include <stdio.h>
const int n = 3;
 
void print(int arr[]  [n], int m)
{
    int i, j;
    for (i = 0; i < m; i++)
      for (j = 0; j < n; j++)
        printf("%d ", arr[i]  [j]);
}
 
int main()
{
    int arr[][3] = { {1, 2, 3},{4, 5, 6},{7, 8, 9} };
    print(arr, 3);
    return 0;
}

{% endhighlight%}

### 1.6.2.2 <u>Passing a string to Function:</u>

<ul>
  <li>Passing an array is like passing an array of characters.</li>
  <li>We can implement it like we did for 1-D array.</li>
  <li>Prototype of function should be </li>
  <li>Example:</li>
# code

{% highlight c %}

#include <stdio.h> 
#include<string.h >
void func(char a[]) {
   printf(a);}
int main() {
   char a[100];
   printf("enter a string\n");
   gets(a);
   func(a) ;
   return 0;
} 

{% endhighlight%}
</ul>

### 1.7 <u>Functions returning values:</u>
<ul>
  <li>Functions can return some value as well, and the type of the value returned by them depends on their return type.</li>
  <li>Functions return value to the place from where they have been called.</li>
</ul>

Example: Sum of two numbers.<br>

# code

{% highlight c %}

#include<stdio.h>
int func(int a, int b)
{
  int sum;
  sum=a+b;
  return sum;
}
void main()
{
 int x, y;
 printf("enter two integers\n");
 scanf("%d%d", &x, &y);
printf("sum is %d",func(x,y));
} 

{% endhighlight%}

<br>
Output: enter two integers
               5 3
               sum is 8
<br>
NOTE: In above program we called function func() from printf()  and the value returned by func() (i.e. 8) was displayed as result. 
<br>

### 1.8 <u>Recursive Functions:</u>
* Sometimes you can call a function using that same function, these functions are known as recursive functions.
* Recursive function can make a program short, but implementing recursive function may be difficult.
* Every time function will return some value that value will go to the place from where it was called, just like normal functions.

<br>
Example:
# code 

{% highlight c %}


#include<stdio.h>
int rec(int a)
{
  if(a==1)
  return 1;
  a=a+rec(a-1);
  return a;
}
void main()
{
 int n;
 printf("enter a number\n");
 scanf("%d",&n);
 printf("sum of %d natural numbers : %d\n",n, rec(n));
}

{% endhighlight%}

Above code can be explained in steps i.e. every time it returned some value, suppose n was initially 4.

<ol>
  <li>a=4</li>
  a=4+rec(3)
  <li>a=3</li>
a=3+rec(2)
  <li>a=2</li>
a=2+rec(1)
  <li>a=1</li>
return 1  // since if condition a==1 is true.
  <li>Now this returned value will go from where it was called i.e. to third step and from there it will go to second and so on.</li>
  <li>So the value of ‘a’ in third step will be 2+1=3.</li>
  <li>And the value of second ‘a’ will be 3+3=6.</li>
  <li>Similarly the end result would be 10.</li>
  <li>This will be sent to main() function by ‘return a’.</li/ol>
Similarly recursive functions can be used to write other codes as well like Fibonacci series, binary trees etc.



