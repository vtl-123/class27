class Chain{
constructor(bodya,bodyb){
    var options={
        bodya:bodya,
        bodyb:bodyb,
        stiffness:0.07,
        length:15
    }
    this.chain=Constraint.create(options);
    World.add(world,this.chain)
}
display(){
    var posa=this.chain.bodya.position
    var posb=this.chain.bodyb.position
    strokeWeight(8)
    line(posa.x,posa.y,posb.x,posb.y)
}
} 