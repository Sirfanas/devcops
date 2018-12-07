<?php

namespace App\Controller;

use App\Entity\Cheicks;
use App\Entity\Participant;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class CoreController extends AbstractController
{
    /**
     * @Route("/", name="home_page")
     */
    public function index()
    {
        $user = $this->getUser();
        $repository = $this->getDoctrine()->getRepository(Participant::class);
        $participant= $repository->findBy([
            'user'=>$this->getUser()
        ]);
        if ($participant !=null){

            return $this->render('core/index.html.twig',['user'=>$user,'participant'=>$participant[0]]);
        }
        return $this->render('core/index.html.twig',['user'=>$user]);
    }

    /**
     * @Route("/map", name="feed_app_page")
     */
    public function map()
    {
        $user= $this->getUser();

        $repository = $this->getDoctrine()->getRepository(Participant::class);
        $participant= $repository->findBy([
            'user'=>$this->getUser()
        ]);


        if ($participant !=null){

            return $this->render('core/map.html.twig',['participant'=>$participant[0]]);
        }
        return $this->render('core/map.html.twig',['user'=>$user]);


    }

    /**
     * @Route("/quotidient-cheick", name="cheick_page")
     */
    public function cheick(Request $request)
    {

        $user = $this->getUser();


        if ($request->isMethod('post')){
            $entityManager = $this->getDoctrine()->getManager();

            $data = $request->request->all();
            $cheick = new Cheicks();
            $cheick->setType($data['type']);
            $cheick->setNiveau($data['niveau']);
            $cheick->setCommentaire($data['comment']);
            $cheick->setUser($this->getUser());
            $entityManager->persist($cheick);

            $entityManager->flush();



        }
        $repository = $this->getDoctrine()->getRepository(Cheicks::class);
        $cheick= $repository->findBy([
            'user'=>$this->getUser()
        ]);

        $repository = $this->getDoctrine()->getRepository(Participant::class);
        $participant= $repository->findBy([
            'user'=>$this->getUser()
        ]);
        if ($participant !=null){

            return $this->render('core/cheick.html.twig',[
                'cheicks'=> $cheick,
                'user'=>$user,
                'participant'=>$participant[0]
            ]);
        }
        return $this->render('core/cheick.html.twig',[
            'cheicks'=> $cheick,
            'user'=>$user]);
    }

    /**
     * @Route("/game",name="game_page")
     */
    public function game()
    {
        $user = $this->getUser();
        $repository = $this->getDoctrine()->getRepository(Participant::class);
        $participant= $repository->findBy([
            'user'=>$this->getUser()
        ]);
        if ($participant !=null){

            return $this->render('core/game.html.twig',['user'=>$user,'participant'=>$participant[0]]);
        }

        return $this->render('core/game.html.twig',['user'=>$user]);

    }

    /**
     * @Route("/equipements",name="equipements_page")
     */
    public function equipements()
    {
        $user = $this->getUser();
        $repository = $this->getDoctrine()->getRepository(Participant::class);
        $participant= $repository->findBy([
            'user'=>$this->getUser()
        ]);
        if ($participant !=null){

            return $this->render('core/game.html.twig',['user'=>$user,'participant'=>$participant[0]]);
        }
        return $this->render('core/game.html.twig',['user'=>$user]);


    }

    /**
     * @Route("/planifications",name="planifications_page")
     */
    public function planifications()
    {
        $user = $this->getUser();
        $repository = $this->getDoctrine()->getRepository(Participant::class);
        $participant= $repository->findBy([
            'user'=>$this->getUser()
        ]);
        if ($participant !=null){

            return $this->render('core/planifications.html.twig',['user'=>$user,'participant'=>$participant[0]]);
        }
        return $this->render('core/planifications.html.twig',['user'=>$user]);


    }
}
