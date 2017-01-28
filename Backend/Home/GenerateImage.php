<?php
  require('Command.php');
  use mikehaertl\shellcommand\Command;

  $command = new Command('./phantomjs /Phantom/render.js '.$_POST['url'].' '.$_POST['size']);
  if ($command->execute()) {
      echo $command->getOutput();
  } else {
      echo $command->getError();
      $exitCode = $command->getExitCode();
  }
?>
