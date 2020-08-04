<?php

use Illuminate\Support\Facades\Route;
//get->peticiones
//post->insertar
//put->actualizar
//dele:-:::<braorra

Route::get('/api/llamarpreguntas', 'NivelesController@preguntas');

Route::get('/{any}', 'aplicacion')->where('any', '.*');