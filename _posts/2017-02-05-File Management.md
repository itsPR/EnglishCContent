---
layout: post
title: "File Management"
subtitle: ""
section: files
---



### File:

A file is a named collection of data stored in any secondary storage (hard disks, pendrives etc.)

### 1.1 Need for file system management in C

Suppose we want to save the results of our program for later use we can create a file and save the result in that file for later retrieval.
Data management can also be done in C with the help of File Managements. We can save data in the form of structures (_user defined data types_).


### 1.2 Operations done on files:

* Open
* Read
* Write
* Close

Files are stored as a sequence of bits. These files end with a End-of-File (EOF) character (1 byte size). This EOF can be used to detect the end of file while programming.



### 1.3 Two ways of processing a file:

* Text: Contains `ASCII` codes.
* Binary: Can contain non-ASCII characters. Ex; Image, audio, video etc.

### 1.4 Commands And Keywords:

 We use file in the form of pointers in C. On defining a file pointer it always points to the first byte.
* `FILE *` is used to define a file pointer.
* `fopen()` is used to link a file to the file pointer. fopen() returns NULL if it is unable to open the file. Given below is a basic file program:

**Example**

{% highlight c %}
FILE *fptr;
char filename[]= "file2.dat"; 
fptr = fopen (filename,"w"); 
if (fptr == NULL) {  
printf (“ERROR IN FILE CREATION”);   
 /* DO SOMETHING */ 
}   
{% endhighlight %}


### 1.5 File Modes:
A file can be opened in 3 modes (this input is given as the second argument in fopen() ):
* `“w”:` File opened in write mode.
* `“r”:` File opened in read mode.
* `“a”:` File opened in append mode i.e. all changes are added to the end of file.
To open binary files we use: `“wb”`, `“rb”`. `“ab”`.


1.6 Exiting if fopen() fails:

**Example**
{% highlight c %}
FILE *fptr; 
char filename[]= "file2.dat";  
fptr = fopen (filename,"w"); 
if (fptr == NULL) {     
printf (“ERROR IN FILE CREATION”);  
 /* Do something */
exit(-1);
}
{% endhighlight%}

### 1.6 Exiting if fopen() fails:
**Example**
{% highlight c %}
                 
                 FILE *fptr; 
                char filename[]= "file2.dat";  
                fptr = fopen (filename,"w"); 
                if (fptr == NULL) {     
                             printf (“ERROR IN FILE CREATION”);  
                            /* Do something */
                exit(-1);
                }
…
{% endhighlight%}

### 2. Reading and Writing in a file.

### 2.1Writing to a file using fprintf():

sfprintf() works just like printf() and sprintf() except that its first argument is a file pointer
**Example**
{% highlight c %}
          FILE *fptr; 
          fptr = fopen ("file.dat","w"); 
          /* Check it's open */ 
          int a=1 , b=2;
          fprintf (fptr, "Hello World!\n"); 
          fprintf (fptr, “%d %d”, a, b);
{% endhighlight%}
The above program opens a file named file.dat and writes “Hello World!” and the values of two integers a & b into the file.

### 2.2 Reading from a file using fscanf():
**Example**
{% highlight c %}
                  FILE *fptr;
                  fptr = fopen (“input.dat”, “r”); 
                  /* Check it's open */
                  if (fptr == NULL) {
                           printf(“Error in opening file \n”); 
                       }
                  fscanf (fptr, “%d %d”,&x, &y);
{% endhighlight%}
The above program reads two integer values stored in the file input.dat and stores the integers in x and y.

### 2.2.1Reading a line from a file:

**Example**
{% highlight c %}
                 FILE *fptr;
                 char line [1000];
                /* Open file and check it is open */ 
                while (fgets(line,1000,fptr) != NULL) {   
                           printf ("Read line %s\n", line); 
                 }
{% endhighlight%}

fgets() takes 3 arguments –  a string, maximum number of characters to read, and a file pointer. It returns NULL if there is an error (such as EOF).

###2.3 Writing or Reading a Single Character:
* Writing/reading a character is equivalent to writing/reading a byte.
* For stdin and stdout we use putchar() and getchar().
{% highlight c %}
              int getchar( ); int getchar( );
              int putchar(int  c);
int fgetc(FILE *fp);
            int fputc(int c, FILE *fp);
{% endhighlight%}

* For file systems we use:

{% highlight c %}
            int fgetc(FILE *fp);
            int fputc(int c, FILE *fp);
{% endhighlight%}

### 3. Closing a file:
* We can close a file using fclose().
{% highlight c %}
         FILE *fptr;
         char filename[]= "myfile.dat"; 
         fptr = fopen (filename,"w"); 
         if (fptr == NULL) {    
                printf ("Cannot open file to write!\n");    
         exit(-1); 
         } 
        fprintf (fptr,"Hello World of filing!\n"); 
        fclose (fptr);
{% endhighlight%}

### 4. Three Special File Streams:
Three special file streams are defined in the <stdio.h> header
* stdin reads input from the keyboard
* stdout send output to the screen
* stderr prints errors to an error device 
These file streams can be used with functions like fprintf , fscanf etc

### 5. Command line arguments:
* A program can be executed by directly typing a command at the operating system prompt.
* $ $ cc –o test test.c cc –o test test.c
* $ $ ./a.out in.dat out.dat ./a.out in.dat out.dat
* $ $ prog_name param_1 param_2 param_3 ..
*  The individual items specified are separated from one another by spaces.
      * First item is the program name.
* Variables argc and argv keep track of the items specified in the command line.
* Command line arguments may be passed by specifying them under main().

image should be added

**Example**
{% highlight c %}
                 #include <stdio.h> 
                 #include <string.h> 
                 #include <string.h> 
                 int main(int argc,char *argv[]) 
                 {    
                 FILE *ifp, *ofp;
                 int i, c;
                 char src_file[100],dst_file[100]; 
                 if(argc!=3) { 
                         printf ("Usage: ./a.out <src_file> <dst_file> \n");
                 exit(0);    
                 }
                 else {
                        strcpy (src_file, argv[1]);
                        strcpy (dst_file, argv[2]); 
                 }
                 if ((ifp = fopen(src_file,"r")) == NULL){
                        printf ("File does not exist.\n");
                 exit(0);
                 }
                 if ((ofp = fopen(dst_file,"w")) == NULL){
                         printf ("File not created.\n");
                 exit(0);
                }
                while ((c = fgetc(ifp)) != EOF) {
                fputc (c,ofp); 
                }
                 fclose(ifp);
                fclose(ofp); 
                }
{% endhighlight%}



