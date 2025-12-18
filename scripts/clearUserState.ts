/**
 * Script to clear user state from zustand storage
 * Usage: npx ts-node scripts/clearUserState.ts
 */

import zustandStorage from "@/utils/zustandStorage";

const clearUserState = () => {
  try {
    zustandStorage.removeItem("user");
    console.log("✓ User state cleared successfully");
  } catch (error) {
    console.error("✗ Error clearing user state:", error);
  }
};

// Run if called directly
clearUserState();
