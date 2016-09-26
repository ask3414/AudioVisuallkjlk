
 function manipulatePixels(){
        var imageData=ctx.getImageData(0,0,canvas.width, canvas.height);
        
        var data = imageData.data;
        var length = data.length;
        var width= imageData.width;
        
        for(var i=0; i<length; i+=4){
            if(tintRed){
                data[i] = data[i]+100;
            }
            if(invert){
                var red = data[i], green = data[i+1], blue = data[i+2];
                data[i]=255-red;
                data[i+1] = 255 - green;
                data[i+2]=255-blue;
            }
            if(noise && Math.random()<.10){
                data[i]=data[i+1]=data[i+2]=128;
            }
            if(lines){
                var row=Math.floor(i/4/width);
                if (row%50==0){
                    data[i]=data[i+1]=data[i+2]=data[i+3]=255;
                    
                data [i+(width*4)]=
                data [i+(width*4)+1]=
                data [i+(width*4)+2]=
                data [i+(width*4) +3]=255;
                }
            }
        }
        ctx.putImageData(imageData,0,0);
    }
        