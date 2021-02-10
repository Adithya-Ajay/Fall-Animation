function isTouching(movingObject,object){
    if (movingObject.x - object.x < object.width/2 + movingObject.width/2
        && object.x - movingObject.x < object.width/2 + movingObject.width/2
        && movingObject.y - object.y < object.height/2 + movingObject.height/2
        && object.y - movingObject.y < object.height/2 + movingObject.height/2) {
            return true
    }
    else {
        return false
      
    }
}


