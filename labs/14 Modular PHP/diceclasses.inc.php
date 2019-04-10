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
            if (rand(0,100)/100 <= $this->p) {
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
    public function getP() {
        return $this->p;
    }
}

class PhysicalDice extends Dice{
    private $material;
    
    // Constructor
    public function __construct($faces, $p, $material) {
        parent :: __construct($faces, $p);
        $this->material = $material;
    }
    public function getMaterial() {
        return $this->material;
    }
}
?>
