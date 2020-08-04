<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NivelesController extends Controller
{
    public function preguntas(){
        $datos = DB::select("SELECT * FROM subnivel sb INNER JOIN preguntas_subnivel ps ON sb.id_subnivel=ps.id_subnivel WHERE sb.id_nivel = 4");
        return $datos;
    }
}
