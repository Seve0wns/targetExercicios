#include<stdio.h>
int invertString(char* string,char* invertedString){
    if(string[0]=='\0'){
        return 0;
    }
    int newIndice=invertString(string+1,invertedString);
    invertedString[newIndice]=string[0];
    return newIndice+1;
}
int main(void){
    int stringMaxSize=50;
    char string[stringMaxSize];
    char invertedString[stringMaxSize];
    int size;
    fgets(string,stringMaxSize,stdin);
    size=invertString(string,invertedString);
    invertedString[size]='\0';
    printf("%s\n",invertedString);
}