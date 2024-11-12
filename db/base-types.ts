import { TableColumnOptions } from 'typeorm';

const id = {
  name: 'id',
  type: 'uuid',
  isPrimary: true,
  isGenerated: true,
  generationStrategy: 'uuid',
} as TableColumnOptions;

const timestampts = [
  {
    name: 'created_at',
    type: 'timestamptz',
    default: 'now()',
  },
  {
    name: 'updated_at',
    type: 'timestamptz',
    default: 'now()',
  },
  {
    name: 'deleted_at',
    type: 'timestamptz',
    isNullable: true,
  },
] as TableColumnOptions[];

export { id, timestampts };
