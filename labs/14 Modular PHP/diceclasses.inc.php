<?php
class Dice {
    private  $faces;
    private  $freqs = array();
    private $totalThrows;
    private $totalEyes;
    private $p;
    
    // Constructor
    public function __construct($faces, $p) {
        $this->faces = $faces;
        $this->p =$p;
    }
    
    public function cast() {
        if ($this->p != 0) {
            if (rand(0,100)/100 > $this->p) {
                $res = $this->faces;
            }else {
                $res = rand(1,$this->faces-1);
            }
        }else {
                $res = rand(1,$this->faces);
        }

        $this->freqs[$res]++;
        $this->totalEyes = $this->totalEyes + $res;
        $this->totalThrows++;
        return $res;
    }

    public function getFreq($eyes) {
        $freq = $this->freqs[$eyes];
        if ($freq=="")
            $freq = 0;
        return $freq;
    }

    public function getAvarage() {
        return $this->totalEyes/$this->totalThrows;
    }
}
#4. In PHP, the inheritance is implemented using **extends** keyword in a fairly Java-like fashion (one of the key differences being that superclass constructors are not automatically called). 
#In **diceclasses.inc.php**, write a new **PhysicalDice** class that becomes a subclass of **Dice**. 
#In the subclass, add a new instance variable that is a string containing the material of the dice (e.g. wood or stone). 
#Modify **diceplay.php** in such a way that the user can give the material of the dice as a parameter. 
#If the material is given, a **PhysicalDice** is created. Otherwise, a regular **Dice** object is generated. For information on inheritance in PHP, see, e.g. http://zetcode.com/lang/php/oopi/ and scroll down to "Inheritance".
class PhysicalDice extends Dice{
    private  $faces;
    private  $freqs = array();
    private $totalThrows;
    private $totalEyes;
    private $p;
    private $material;
    
    // Constructor
    public function __construct($faces, $p, $material) {
        $this->faces = $faces;
        $this->p =$p;
        $this->material = $material;
    }
    public function getMaterial() {
        return $this->material;
    }
}
?>
