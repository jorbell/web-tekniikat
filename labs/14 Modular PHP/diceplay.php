<?php

include("diceclasses.inc.php");

$faces = $_GET["faces"];
$throws = $_GET["throws"];
$material =$_GET["material"];
$p = $_GET["p"];
$results = array();

if(!isset($p)){
    $p = 0;
}
// make dice
if(isset($material)){
    $dice = new PhysicalDice($faces, $p, $material);
}else {
    $dice = new Dice($faces, $p);
}
for ($i = 1; $i<=$throws; $i++) {
    $res = $dice->cast();
    $results[] = array('id' => strval($i), 'res' => strval($res), 'avg' => strval($dice->getAvarage()));
}
$freqs = array();
for ($i = 1; $i<=$faces; $i++) {
    $freqs[] = array ('eyes' => strval($i), 'frequency' => strval($dice->getFreq($i)));
}
echo json_encode(array('faces'=>$faces,'results'=>$results,'frequencies'=>$freqs));
echo '<br /> Avarage of throws: ' . $dice->getAvarage();
if(isset($material)){
    echo $dice->getMaterial();
}
?>
