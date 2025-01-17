export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      admins: {
        Row: {
          inserted_at: string
          userid: string | null
        }
        Insert: {
          inserted_at?: string
          userid?: string | null
        }
        Update: {
          inserted_at?: string
          userid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "admins_userid_fkey"
            columns: ["userid"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      orders: {
        Row: {
          id: string
          inserted_at: string
          productid: string | null
          updated_at: string
          userid: string | null
        }
        Insert: {
          id?: string
          inserted_at?: string
          productid?: string | null
          updated_at?: string
          userid?: string | null
        }
        Update: {
          id?: string
          inserted_at?: string
          productid?: string | null
          updated_at?: string
          userid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_productid_fkey"
            columns: ["productid"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_userid_fkey"
            columns: ["userid"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      product_orders: {
        Row: {
          id: string
          orderid: string | null
          productid: string | null
        }
        Insert: {
          id?: string
          orderid?: string | null
          productid?: string | null
        }
        Update: {
          id?: string
          orderid?: string | null
          productid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_orders_orderid_fkey"
            columns: ["orderid"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_orders_productid_fkey"
            columns: ["productid"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          description: string | null
          gallery: string[] | null
          id: string
          mainimage: string | null
          name: string | null
          price: string | null
          sizes: string[] | null
          url: string | null
        }
        Insert: {
          description?: string | null
          gallery?: string[] | null
          id?: string
          mainimage?: string | null
          name?: string | null
          price?: string | null
          sizes?: string[] | null
          url?: string | null
        }
        Update: {
          description?: string | null
          gallery?: string[] | null
          id?: string
          mainimage?: string | null
          name?: string | null
          price?: string | null
          sizes?: string[] | null
          url?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          email: string | null
          email_subscribe: boolean | null
          id: string
          inserted_at: string
          name: string | null
          phone_number: string | null
          updated_at: string
        }
        Insert: {
          email?: string | null
          email_subscribe?: boolean | null
          id: string
          inserted_at?: string
          name?: string | null
          phone_number?: string | null
          updated_at?: string
        }
        Update: {
          email?: string | null
          email_subscribe?: boolean | null
          id?: string
          inserted_at?: string
          name?: string | null
          phone_number?: string | null
          updated_at?: string
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
