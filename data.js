exports.quizData = {
  questions: [
    {
      category: "array",
      type: "multiple",
      difficulty: "medium",
      question: "Predict output of following program.",
      code:`
int main()
{
    int i;
    int arr[5] = {1};
    for (i = 0; i < 5; i++)
        printf("%d ", arr[i]);
    return 0;
}
      `,
      correct_answer: "1 0 0 0 0",
      options: [
        "1 followed by four garbage values",
        "1 1 1 1 1",
        "1 0 0 0 0",
        "0 0 0 0 0"
      ]
    },
    {
      category: "array",
      type: "boolean",
      difficulty: "easy",
      question: "Which of these best describes an array?",
      correct_answer: "Container of objects of similar types",
      options: [
        "Container of objects of similar types",
        "A data structure that shows a hierarchical behavior",
        "Arrays are immutable once initialised",
        "Array is not a data structure"
      ]
    },
    {
      category: "array",
      type: "multiple",
      difficulty: "medium",
      question: " How do you initialize an array in C?",
      correct_answer: "int arr[3] = {1,2,3};",
      options: [
        "int arr[3] = (1,2,3);",
        "int arr[3] = {1,2,3};",
        "int arr(3) = {1,2,3};",
        "int arr(3) = (1,2,3);"
      ]
    },
    {
      category: "array",
      type: "multiple",
      difficulty: "medium",
      question: "What are the advantages of arrays?",
      correct_answer: "Easier to store elements of same data type",
      options: [
      "Objects of mixed data types can be stored"
      ,"Elements in an array cannot be sorted"
      ,"Index of first element of an array is 1",
      "Easier to store elements of same data type"
      ]
    },{
      category: "array",
      type: "multiple",
      difficulty: "medium",
      question: "What are the disadvantages of arrays?",
      correct_answer: "There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size",
      options: [
        "There are chances of wastage of memory space if elements inserted in an array are lesser than the allocated size",
        "Data structure like queue or stack cannot be implemented",
        "Index value of an array can be negative",
        "Elements are sequentially accessed"
      ]
    },
    {
      category: "string",
      type: "multiple",
      difficulty: "hard",
      question: "Which of the following function is used to find the first occurrence of a given string in another string?",
      correct_answer: "strstr()",
      options: [
        "strchr()",
        "strrchr()",
        "strstr()",
        "strnset()"
      ]
    },
    {
      category: "string",
      type: "multiple",
      difficulty: "easy",
      question: "What will be the output of the program ?",
      code: `
#include<stdio.h>
#include<string.h>
int main()
{
    char str1[20] = "Hello", str2[20] = " World";
    printf("%s", strcpy(str2, strcat(str1, str2)));
    return 0;
}`,
      correct_answer: "Hello World",
      options: [
        "Hello World",
        "Hello",
        "World",
        "WorldHello"
      ]
    },
    {
      category: "string",
      type: "multiple",
      difficulty: "medium",
      question: "What will be the output of the program ?",
      code:`
#include<stdio.h>
int main()
{
    char p[] = "%d";
    p[1] = 'c';
    printf(p, 65);
    return 0;
}`,
      correct_answer: "A",
      options: [
        "a",
        "c",
        "65",
        "A"
      ]
    },
    {
      category: "string",
      type: "multiple",
      difficulty: "medium",
      question: "What will be the output of the program ?",
      code:`
#include<stdio.h>
#include<string.h>
int main()
{
    printf("%d", strlen("123456"));
    return 0;
}`,
      correct_answer: "6",
      options: [
        "12",
        "7",
        "6",
        "2"
      ]
    },
    {
      category: "string",
      type: "multiple",
      difficulty: "medium",
      question: "What will be the output of the program ?",
      code:`
#include<stdio.h>
int main()
{
    printf(5+"Good Morning");
    return 0;
}`,
      correct_answer: "Morning",
      options: [
        "Good",
        "M",
        "Good Morning",
        "Morning"
      ]
    },
    {
      category: "stack-queue",
      type: "multiple",
      difficulty: "hard",
      question: "Which of the following is essential for converting an infix expression to the postfix from efficiently ?",
      correct_answer: "An operator stack",
      options: [
        "An operand stack",
        "An operator stack",
        "An operand stack and an operator stack",
        "A parse tree"
      ]
    },
    {
      category: "stack-queue",
      type: "multiple",
      difficulty: "medium",
      question: "The best data structure to check whether an arithmetic expression has balanced parentheses is a",
      correct_answer: "stack",
      options: [
        "queue",
        "tree",
        "list",
        "stack"
      ]
    },
    {
      category: "stack-queue",
      type: "multiple",
      difficulty: "medium",
      question: `The result evaluating the postfix expression  10 5 + 60 6 / * 8 –  is`,
      correct_answer: "142",
      options: [
        "284",
        "213",
        "142",
        "71"
      ]
    },
    {
      category: "stack-queue",
      type: "multiple",
      difficulty: "medium",
      question: "A linear list of elements in which deletion can be done from one end (front) and insertion can take place only at the other end (rear) is known as _____________",
      correct_answer: "Queue",
      options: [
        "Stack",
        "Queue",
        "Tree",
        "Linked List"
      ]
    },
    {
      category: "stack-queue",
      type: "multiple",
      difficulty: "medium",
      question: " A queue follows __________",
      correct_answer: "FIFO",
      options: [
        "LIFO",
        "FIFO",
        "ordered array",
        "linear tree"
      ]
    },
    {
      category: "operator-precedence",
      type: "multiple",
      difficulty: "hard",
      question: `Which of the following is the correct order of evaluation for the below expression?
      z = x + y * z / 4 % 2 - 1`,
      correct_answer: "* / % + - =",
      options: [
        "= * / % + -",
        "/ * % - + =",
        "* % / - + =",
        "* / % + - ="
      ]
    },
    {
      category: "operator-precedence",
      type: "multiple",
      difficulty: "medium",
      question: "Which of the following correctly shows the hierarchy of arithmetic operations in C?",
      correct_answer: "/ * + -",
      options: [
        "/ * + -",
        "+ - / *",
        "* - / +",
        "/ + * -"
      ]
    },
    {
      category: "operator-precedence",
      type: "multiple",
      difficulty: "medium",
      question: "Which of the following is the correct usage of conditional operators used in C?",
      correct_answer: "max = a>b ? a>c?a:c:b>c?b:c",
      options: [
        "a>b ? c=30 : c=40;",
        "max = a>b ? a>c?a:c:b>c?b:c",
        "a>b ? c=30;",
        "return (a>b)?(a:b)"
      ]
    },
    {
      category: "operator-precedence",
      type: "multiple",
      difficulty: "medium",
      question: `What will be the output of the program?`,
      code: `
      #include<stdio.h>
      int main()
      {
          int i=-3, j=2, k=0, m;
          m = ++i && ++j && ++k;
          printf("%d, %d, %d, %d", i, j, k, m);
          return 0;
      }`,
      correct_answer: "-2, 3, 1, 1",
      options: [
        "2, 3, 1, 2",
        "1, 2, 3, 1",
        "3, 3, 1, 2",
        "-2, 3, 1, 1"
      ]
    },
    {
      category: "operator-precedence",
      type: "multiple",
      difficulty: "medium",
      question: `What will be the output of the program?`,
      code: `
#include<stdio.h>
int main()
{
    static int a[20];
    int i = 0;
    a[i] = i  ;
    printf("%d, %d, %d", a[0], a[1], i);
    return 0;
}`,
      correct_answer: "0, 0, 0",
      options: [
        "1, 0, 1",
        "0, 0, 0",
        "1, 1, 1",
        "0, 1, 0"
      ]
    }
  ]
}