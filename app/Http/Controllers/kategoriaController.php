<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\kategoria;
class kategoriaController extends Controller
{
    public function store(Request $request)
    {
       
        
        $kategoria=kategoria::selectRaw("*");
        $kategoria=$kategoria->get();
        return response()->json($kategoria);
        
    }
}
