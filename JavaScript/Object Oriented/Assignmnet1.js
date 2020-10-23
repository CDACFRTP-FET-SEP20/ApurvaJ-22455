class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
      }

      getX(){
        return this.x;
      }

      getY(){
        return this.y;
      }
      
      setX(x){
        this.x=x
      }
      setY(y){
        this.y = y;
      }
}

class Shape extends Point{
    constructor(edge)
    {
      this.edge = edge;
      this.points = [];
    
    }

    findPerimeter(){

    }
    findArea(){

    }
}

class Circle extends Shape{
  constructor(radius){
    this.edge = radius
    
  }
}
