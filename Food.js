class Food{
    constructor(){
    this.image = loadImage("Milk.png")
    this.foodStock = 20;
    }

    display(){
        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(foodS!=0){
            for(var i=0;i<foodS;i++){
                if(i%10==0){
                    x=80;
                    y=y+50
                }
                this.image(this.image,x,y,50,50);
                x=x+30;
            }
        }
    }



    getFoodStock(){
     foodStock=database.ref('Food');
     foodStock.on("value",function(data){
     foodS = data.val()
    });
    }

    updateFoodStock(x){
        database.ref('./').set({
            Food:x
        })
    }

}

