---
layout: post
title: "Flow Control"
subtitle: ""
section: flow
---



###  Flow Control


1. Conditional statements (if else)

2. Iterative statements/ loops (for, while, do while)

### 1. The if Statement:


The if statement allows you to control if a program enters a section of code or not based on whether a given condition is true or false. One of the important functions of the if statement is that it allows the program to select an action based upon the user's input


### 1.1 Syntax:

The structure of an if statement is as follows:

{% highlight c %}
                if ( statement is TRUE )
       Execute this line of code
{% endhighlight%}

To have more than one statement execute after an if statement that evaluates to true, use braces, like we did with the body of the main function. Anything inside braces is called a compound statement, or a block. When using if statements, the code that depends on the if statement is called the "body" of the if statement. 

For example: 
{% highlight c %}
if ( TRUE ) {
    /* between the braces is the body of the if statement */
    Execute all statements inside the body
}
{% endhighlight %}

Here are the relational operators, as they are known, along with examples: 

* `>`     greater than              `5 > 4 is TRUE`
* `<`     less than                 `4 < 5 is TRUE`
* `>=`    greater than or equal     `4 >= 4 is TRUE`
* `<=`    less than or equal        `3 <= 4 is TRUE`
* `==`    equal to                  `5 == 5 is TRUE`
* `!=`    not equal to              `5 != 4 is TRUE`

### 1.2 Else 

Sometimes when the condition in an if statement evaluates to false, it would be nice to execute some code instead of the code executed when the statement evaluates to true. The "else" statement effectively says that whatever code after it (whether a single line or code between brackets) is executed if the if statement is __FALSE__. 

It can look like this: 

{% highlight c %}

if ( Statement ) {
    /* Execute these statements if TRUE */
}
else {
    /* Execute these statements if FALSE */
}
{% endhighlight %}

### 1.3 Else if

Another use of else is when there are multiple conditional statements that may all evaluate to true, yet you want only one if statement's body to execute. You can use an "else if" statement following an if statement and its body; that way, if the first statement is true, the "else if" will be ignored, but if the if statement is false, it will then check the condition for the else if statement. If the if statement was true the else statement will not be checked. It is possible to use numerous else if statements to ensure that only one block of code is executed.

Let's look at a simple program for you to try out on your own. 

{% highlight c %}
#code

#include <stdio.h>  

int main()                            /* Most important part of the program!  */
{
    int age;                          /* Need a variable... */
  
    printf( "Please enter your age" );  /* Asks for age */
    scanf( "%d", &age );                 /* The input is put in age */
    if ( age < 100 ) {                  /* If the age is less than 100 */
        printf ("You are pretty young!\n" ); /* Just to show you it works... */
    }
    else if ( age == 100 ) {            /* I use else just to show an example */ 
        printf( "You are old\n" );       
    }
    else {
        printf( "You are really old\n" );     /* Executed if no other statement is */
    }
  return 0;
}

{% endhighlight %}


### 1.4 Chaining multiple conditions is possible with the following operators:

|| - OR Condition    EX: if(a==b || b==c)<br>
&&- AND Condition EX: if(a==b && b==c)


### 2.Iterative Statements

Loops are used to repeat a block of code. Being able to have your program repeatedly execute a block of code is one of the most basic but useful tasks in programming.

### 2.1 The for loop

{% highlight c %}

for ( variable initialization; condition; variable update ) {
  Code to execute while the condition is true
}

{% endhighlight %}

The variable initialization lets you declare a variable and give it a value or give a value to an already existing variable.
The condition will tell the loop where to stop. The loop will continue as long as the condition holds good.


The variable update section is the easiest way for a for loop to handle changing of the variable. It is possible to do things like x++, x = x + 10, or even x = random ( 5 ), and if you really wanted to, you could call other functions that do nothing to the variable but still have a useful effect on the code.


Notice that a semicolon separates each of these sections, that is important. Also note that every single one of the sections may be empty, though the semicolons still have to be there. If the condition is empty, it is evaluated as true and the loop will repeat until something else stops it.


**Example:**

#code 

{% highlight c %}

#include <stdio.h>

int main()
{
    int x;
    /* The loop goes while x < 10, and x increases by one every loop*/
    for (x = 0; x < 10; x++ ) {
        /* Keep in mind that the loop condition checks 
           the conditional statement before it loops again.
           Consequently, when x equals 10 the loop breaks.
           x is updated before the condition is checked. */   
        printf( "%d\n", x );
    }
    getchar();
}


{% endhighlight %}


This program is a very simple example of a for loop. x is set to zero, while x is less than 10 it calls printf to display the value of the variable x, and it adds 1 to x until the condition is met.



Keep in mind also that the variable is incremented after the code in the loop is run for the first time.

### 2.2 The while loop:


{% highlight c %}

while ( condition ) { 
Code to execute while the condition is true 
}

{% endhighlight %}


An empty condition is not legal for a while loop as it is with a for loop.

Example:
#code

{% highlight c %}


#include <stdio.h>

int main()
{ 
  int x = 0;  /* Don't forget to declare variables */
  
  while ( x < 10 ) { /* While x is less than 10 */
      printf( "%d\n", x );
      x++;             /* Update x so the condition can be met eventually */
  }
  getchar();
}

{% endhighlight %}


### 2.3 The do…while loop:


{% highlight c %}

do {
  while ( condition );
}

{% endhighlight %}

Here the condition is tested at the end of first iteration, so the block will be executed at least once. If the condition is true, we jump back to the beginning of the block and execute it again.


Example: 

{% highlight c %}
#include <stdio.h>

int main()
{
  int x;

  x = 0;
  do {
    /* "Hello, world!" is printed at least one time
      even though the condition is false */
      printf( "Hello, world!\n" );
  } while ( x != 0 );
  getchar();
}

{% endhighlight %}

### 2.4 break Statement:

The break statement terminates the loop (for, while and do...while loop) immediately when it is encountered.

**we need to add image**

**Example:**<br>
#code


{% highlight c %}
int main()
{
    int i;
    double number, sum = 0.0;

    for(i=1; i <= 10; ++i)
    {
        printf("Enter a n%d: ",i);
        scanf("%lf",&number);

        // If user enters negative number, loop is terminated
        if(number < 0.0)
        {
            break;
        }

        sum += number; // sum = sum + number;
    }

    printf("Sum = %.2lf",sum);
    
    return 0;
}

{% endhighlight %}

**Output**
Enter a n1: 2.4
Enter a n2: 4.5
Enter a n3: 3.4
Enter a n4: -3
Sum = 10.30

### 2.5 continue Statement

The continue statement skips some statements inside the loop. The continue statement is used with decision making statement such as if...else.

Image needs to be added

**Example:**  
#code


{% highlight c %}
int main()
{
    int i;
    double number, sum = 0.0;

    for(i=1; i <= 10; ++i)
    {
        printf("Enter a n%d: ",i);
        scanf("%lf",&number);

        // If user enters negative number, loop is terminated
        if(number < 0.0)
        {
            continue;
        }

        sum += number; // sum = sum + number;
    }

    printf("Sum = %.2lf",sum);
    
    return 0;
}

{%endhighlight%}


**Output**

Enter a n1: 1.1
Enter a n2: 2.2
Enter a n3: 5.5
Enter a n4: 4.4
Enter a n5: -3.4
Enter a n6: -45.5
Enter a n7: 34.5
Enter a n8: -4.2
Enter a n9: -1000
Enter a n10: 12
Sum = 59.70

