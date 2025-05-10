<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('design-pattern', function () {
    return Inertia::render('Design');
})->middleware(['auth', 'verified'])->name('design-pattern');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
