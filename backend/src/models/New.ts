import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Tag from './Tag';

@Entity('news')
class New {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column()
  autor: string;

  @Column()
  app_tag_id: string;

  @ManyToOne(() => Tag)
  @JoinColumn({ name: 'app_tag_id' })
  app_tag: Tag;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default New;
