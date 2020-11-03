class Slingshot{
    constructor(bodyA,bodyB,pointB){
        var options = {
            bodyA: bodyA,
           pointB: pointB,
           bodyB : bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyB = null
    }
    display(){
        if(this.sling.bodyB){
            push()
        var pointA = this.sling.bodyA.position;
        
        var pointB = this.sling.bodyB.position;
        strokeWeight(4);
        
       line(pointA.x, pointA.y, pointB.x, pointB.y);
       pop()
        }
    }

    
}