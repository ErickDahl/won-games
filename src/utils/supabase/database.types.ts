export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      classifications: {
        Row: {
          age_limit: number
          created_at: string | null
          id: number
          name: string
        }
        Insert: {
          age_limit: number
          created_at?: string | null
          id?: number
          name: string
        }
        Update: {
          age_limit?: number
          created_at?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      game_categories: {
        Row: {
          category_id: number
          game_id: number
        }
        Insert: {
          category_id: number
          game_id: number
        }
        Update: {
          category_id?: number
          game_id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'game_categories_category_id_fkey'
            columns: ['category_id']
            isOneToOne: false
            referencedRelation: 'categories'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'game_categories_game_id_fkey'
            columns: ['game_id']
            isOneToOne: false
            referencedRelation: 'games'
            referencedColumns: ['id']
          }
        ]
      }
      game_platforms: {
        Row: {
          game_id: number
          platform_id: number
        }
        Insert: {
          game_id: number
          platform_id: number
        }
        Update: {
          game_id?: number
          platform_id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'game_platforms_game_id_fkey'
            columns: ['game_id']
            isOneToOne: false
            referencedRelation: 'games'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'game_platforms_platform_id_fkey'
            columns: ['platform_id']
            isOneToOne: false
            referencedRelation: 'platforms'
            referencedColumns: ['id']
          }
        ]
      }
      game_publishers: {
        Row: {
          game_id: number
          publisher_id: number
        }
        Insert: {
          game_id: number
          publisher_id: number
        }
        Update: {
          game_id?: number
          publisher_id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'game_publishers_game_id_fkey'
            columns: ['game_id']
            isOneToOne: false
            referencedRelation: 'games'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'game_publishers_publisher_id_fkey'
            columns: ['publisher_id']
            isOneToOne: false
            referencedRelation: 'publishers'
            referencedColumns: ['id']
          }
        ]
      }
      games: {
        Row: {
          classification_id: number
          coverimage: string | null
          created_at: string | null
          description: string | null
          id: number
          price: number
          release_date: string | null
          stock: number
          title: string
        }
        Insert: {
          classification_id: number
          coverimage?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          price: number
          release_date?: string | null
          stock: number
          title: string
        }
        Update: {
          classification_id?: number
          coverimage?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          price?: number
          release_date?: string | null
          stock?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: 'games_classification_id_fkey'
            columns: ['classification_id']
            isOneToOne: false
            referencedRelation: 'classifications'
            referencedColumns: ['id']
          }
        ]
      }
      platforms: {
        Row: {
          created_at: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      publishers: {
        Row: {
          created_at: string | null
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views']) | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    ? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes'] | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never
