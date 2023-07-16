for(row=1;row<=4;row++){
    str=''
    for(i=1;i<=row;i++)
    str=str+' '
    for(col=4;col>=row;col--){
        str=str+'* '

    }
    console.log(str);
}