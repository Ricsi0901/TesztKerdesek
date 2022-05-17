<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\teszt;
class tesztController extends Controller
{
    public function store(Request $request)
    {
       
        
        $teszt=teszt::selectRaw("*");
        $teszt=$teszt->get();
        return response()->json($teszt);
        
    }
}
