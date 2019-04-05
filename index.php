<?php
$files = array();
$di = new RecursiveDirectoryIterator('labs');
foreach (new RecursiveIteratorIterator($di) as $filename => $file) {
    array_push($files, $filename);
}
sort($files);

for ($i = 0; $i < count($files); $i++) {
   echo '<a href="' . $files[$i] . '">' . $files[$i] . '</a><br/>';
}
?>
