<?php

use Illuminate\Support\Facades\Route;
//get->peticiones
//post->insertar
//put->actualizar
//dele:-:::<braorra


Route::get('/{any}', 'aplicacion')->where('any', '.*');