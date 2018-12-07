<?php

namespace App\Repository;

use App\Entity\Cheicks;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Cheicks|null find($id, $lockMode = null, $lockVersion = null)
 * @method Cheicks|null findOneBy(array $criteria, array $orderBy = null)
 * @method Cheicks[]    findAll()
 * @method Cheicks[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CheicksRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Cheicks::class);
    }

    // /**
    //  * @return Cheicks[] Returns an array of Cheicks objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Cheicks
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
