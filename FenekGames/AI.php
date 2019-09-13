<!DOCTYPE html>

<?php
	$connection = mysqli_connect('127.0.0.1','root','','SAI');
	if (isset($_GET['Say'])) {
		$state = 'Say';
		$have = false;
		$add = true;
		$count = 1;
		$result = mysqli_query($connection, "SELECT * FROM intelligent");
		while (($r1 = mysqli_fetch_assoc($result))){
			if ($_GET['SayT'] == $r1['question']) {
				if ($r1['answer'] == '') $add = false;
				else {
					$answer = $r1['answer'];
					$have = true;
				}
			}
			$count++;
		}
		if (!$have) {
			$answer = 'Не понял вас';
			$q = $_GET['SayT'];
			if ($add && mysqli_query($connection, "INSERT INTO intelligent (id, question, answer) VALUES ('.$count.', '$q', NUll)")) {
				if($add)$answer = '???';
			}
		}
	}
	
	if (isset($_GET['Listen'])) {
		//$c = 0;
		$state = 'AnswerSay';
		$result = mysqli_query($connection, "SELECT * FROM intelligent");
		while (($r1 = mysqli_fetch_assoc($result))){
			if ($r1['answer'] == null) {
				$answer = $r1['question'];
				$c = $r1['id'];
			}
		}
	}
	$c;
	if (isset($_GET['AnswerSay'])) {
		$a = $_GET['SayT'];
		if (mysqli_query($connection, "UPDATE intelligent SET answer = '$a' WHERE id = '$cc'")) {
			$answer = 'Понятно';
		}
		$state = 'Say';
	}
	else $cc = $c;
	
	//mysqli_close($connection);
	//if (isset($_GET['Say'])) empty($_GET['Listen']);
	//else if (isset($_GET['Listen'])) empty($_GET['Say']);
?>

<head>
    <meta charset="utf-8">
    <title>FeneKGames</title>  
    <link rel="stylesheet" media="screen and (max-width: 600px)" href="mobile.css"/>
    <link rel="stylesheet" media="screen and (min-width: 600px)" href="style.css"/>
    <!--><script type="text/javascript" src="jquery-3.3.1.js"></script></!-->
    
</head>
<body>
    <div class="upbar">
        <a href="main.html"><img class="logo" src="Design/logoFeneK.png"></a>
        <ul class="buttons">
            <li><a href="AI.php">S.A.I</a></li>
            <li><a href="games.html">Игры</a></li>
            <li><a href="about.html">О нас</a></li>
            <li><a href="contacts.html">Контакты</a></li>
        </ul>
    </div>
    <div class="wrapper">
		<div id="AI_block">
			<div id="AI_face">
				<div id="AI_eye"></div>
			</div>
		</div>
		<form action="AI.php" method="get">
			<div id="interface">
				<b>Т.И.И:</b> <br>
				<input type="text" size="40" disabled="disabled" value="<?php echo $answer ?>">
				<input type="submit" value="Слушать" name="Listen">
			</div>
			<?php echo $cc; ?>
			<div id="interface">
				<b>Вы:</b> <br>
				<input type="text" size="40" id="SayT" name="SayT"> <br>
				<input type="submit" value="Сказать" name="<?php if ($state == 'Listen'){ echo 'AnswerSay'; } else if ($state == 'AnswerSay') { echo 'AnswerSay'; } else { echo 'Say'; } ?>">
			</div>
		</form>
    </div>
    <div class="bottombar">
        <div>FeneK 2018</div>
    </div>
    <script src="AI.js"></script>
</body>