<?php
switch ($_POST['requestType']) {
    case 'GenerateImage':
        require('Home/GenerateImage.php');
        break;
    default:
        echo json_encode(array("Status"=>"Missing requestType"));
}

?>
