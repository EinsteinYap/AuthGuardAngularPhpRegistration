<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:access");
header("Access-Control-Allow-Methods:PUT,GET,POST,DELETE");
header("Access-Control-Allow-Headers:Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With");
header("Access-Control-Allow-Credentials:true");
header("Content-Type:application/json;charset=UTF-8");

//below using mysqli

 $db_host='localhost';
 $db_name ='angularcrud';
 $db_username = 'root';
 $db_password ='';
 $mysqli = new mysqli($db_host,$db_username,$db_password,$db_name)

 //below using PDO

// class Operations{
//     private $db_host='localhost';
//     private $db_name ='angularcrud';
//     private $db_username = 'root';
//     private $db_password ='';

//         public function dbConnection()
//         {
//             try{
//                 $conn = new PDO('mysql:host=' .$this->db_host.';
//                                         dbname='.$this->db_name,
//                                         $this->db_username,
//                                         $this->db_password);

//                 $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
//                 return $conn;
//             }catch (PDOException $e){
//                 echo "Connection error " .$e->getMessage();
//                 exit;
//                 }
//         }
// }
?>


