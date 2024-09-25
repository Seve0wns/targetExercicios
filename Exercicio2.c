#include<stdio.h>
int fibonacci(int number){
    if(number==0||number==1){
        return 1;
    }
    return fibonacci(number-1)+fibonacci(number-2);
}
int main(void){
    int number=0;
    printf("Insira o numero que se deseja calcular o fibonacci:\n");
    scanf("%d",&number);
    printf("fibonacci: %d\n",fibonacci(number));
}