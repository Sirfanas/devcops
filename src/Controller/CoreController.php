<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class CoreController extends AbstractController
{
    /**
     * @Route("/", name="home_page")
     */
    public function index()
    {
        return $this->render('core/index.html.twig');
    }

    /**
     * @Route("/map", name="feed_app_page")
     */
    public function map()
    {
        return $this->render('core/map.html.twig');

    }
}
