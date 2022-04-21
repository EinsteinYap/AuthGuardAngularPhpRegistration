<?php

include_once("db_connect.php");
$postdata =file_get_contents(("php://input"));
if(isset($postdata)&& !empty($postdata)){
    
    $request = json_decode($postdata);
   
    $f_name =trim($request->f_name);
    echo json_encode($f_name);
    $l_name = trim($request->l_name);
    echo json_encode($l_name);
    $email = mysqli_real_escape_string($mysqli,trim($request->email));
    echo json_encode($email);
    $password = mysqli_real_escape_string($mysqli,trim($request->password));
    echo json_encode($password);
    $mobile = trim($request->mobile);
    echo json_encode($mobile);

    $sql = "INSERT INTO loginregister(
        f_name,
        l_name,
        email,
        password,
        mobile)
        VALUES(
        '$f_name',
        '$l_name',
        '$email',
        '$password',
        '$mobile'    
        )";

    if($mysqli->query($sql)){
        $data = array('message'=>'success');
        echo json_encode($data);
    }
    else{
        $data=array('message'=>'failed');
        echo json_encode($data);
    }

};

?>