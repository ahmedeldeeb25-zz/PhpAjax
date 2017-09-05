<?php

include 'conn.php';


// $conn = new mysqli("localhost","root","","jsoncourse");
// if($conn->connect_error){die("error");}
// $sql = $conn->prepare("INSERT INTO users (`firstName`, `lastName`, `age`) VALUES (?,?,?)");
// $sql->bind_param("ssi",$_POST['firstName'],$_POST['lastName'], $_POST['age']);
// if($sql->execute()){
// echo 'success';
// }else{
// echo 'error '. mysqli_error($conn);
// }
// $sql->close();

$firstname=$_POST['firstName'];
$lastname=$_POST['lastName'];
$age=$_POST['age'];

$sql="INSERT INTO `users`(`firstname`, `lastname`, `age`) VALUES  ('".$firstname."','".$lastname."','".$age."')";
$result=mysqli_query($conn,$sql) or die('There is an error in sql statement '.mysqli_error($conn));

mysqli_close($conn);

echo $firstname;
?>